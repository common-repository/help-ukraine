<?php // phpcs:ignore
// phpcs:disable Squiz.Commenting.FileComment.MissingPackageTag, Squiz.Commenting.FunctionComment

/**
 * Plugin Name: Help Ukraine
 * Description: A plugin to simplify adding a Help Ukraine banner, from the folks at https://helpukrainewinwidget.org/, to WordPress websites
 * Author: Help Ukraine Win
 * Version: 1.0.4
 * Author URI: https://helpukrainewin.org/
 * License: GPL2+
 * Text Domain: help-ukraine
 * Requires at least: 5.0
 */

define( 'HELP_UKRAINE_VERSION', '1.0.4' );

/**
 * Add unique handle where the script will be hooked.
 */
function help_ukraine_inject_script_hook() {
	if ( ! is_help_ukraine_widget_enabled() ) {
		return;
	}

	if ( doing_action( 'wp_body_open' ) ) {
		remove_action( 'wp_footer', 'help_ukraine_inject_script_hook' );
	}

	echo '<div id="help-ukraine-win"></div>';
}
add_action( 'wp_body_open', 'help_ukraine_inject_script_hook' );
add_action( 'wp_footer', 'help_ukraine_inject_script_hook' );


/**
 * Enqueue the script for the Help Ukraine widget, as well as translatable strings.
 */
function help_ukraine_enqueue_script() {
	if ( ! is_help_ukraine_widget_enabled() ) {
		return;
	}

	wp_enqueue_script( 'help-ukraine', get_help_ukraine_script_url(), array(), HELP_UKRAINE_VERSION, true );
	wp_localize_script(
		'help-ukraine',
		'helpUkraine',
		array(
			'variation'               => esc_attr( help_ukraine_get_setting_value( 'variation', 'four' ) ),
			'position'                => esc_attr( help_ukraine_get_setting_value( 'position', 'bottom-right' ) ),
			'stop_war_help'           => __( 'Stop War! You can help!', 'help-ukraine' ),
			'see_what_do'             => __( 'See what you can do', 'help-ukraine' ),
			'stop_war'                => __( 'Stop War!', 'help-ukraine' ),
			'see_how'                 => __( 'See how', 'help-ukraine' ),
			'help_ukraine'            => __( 'Help Ukraine!', 'help-ukraine' ),
			'help_ukraine_win'        => __( 'Help 🇺🇦 Ukraine win!', 'help-ukraine' ),
			'hashtag'                 => __( '#StandWithUkraine', 'help-ukraine' ),
			'see_how_help'            => __( 'See how to help', 'help-ukraine' ),
			'get_widget'              => __( 'Get widget', 'help-ukraine' ),
		)
	);
}
add_action( 'wp_enqueue_scripts', 'help_ukraine_enqueue_script' );

function get_help_ukraine_script_url() {
	$plugin_url_base = plugin_dir_url( __FILE__ );

	if ( defined( 'IS_WPCOM' ) && IS_WPCOM ) {
		$plugin_url_base .= '/help-ukraine/';
	}

	return $plugin_url_base . 'script.js';
}

function help_ukraine_get_valid_display_variations() {
	return array(
		'four'  => __( 'Help 🇺🇦 Ukraine win!', 'help-ukraine' ),
		'two'   => __( 'Stop War! You can help!', 'help-ukraine' ),
		'three' => __( 'Stop War! Help Ukraine!', 'help-ukraine' ),
	);
}

function help_ukraine_get_valid_display_positions() {
	return array(
		'bottom-right' => __( 'Bottom Right', 'help-ukraine' ),
		'bottom-left'  => __( 'Bottom Left', 'help-ukraine' ),
		'top-right'    => __( 'Top Right', 'help-ukraine' ),
		'top-left'     => __( 'Top Left', 'help-ukraine' ),
	);
}

function help_ukraine_get_setting_value( $setting, $default = '' ) {
	$option = get_option( 'help_ukraine_options', array() );
	return ! empty( $option ) && ! empty( $option[ $setting ] )
		? $option[ $setting ]
		: '';
}

function is_help_ukraine_widget_enabled() {
	$option = get_option( 'help_ukraine_options', array() );

	// On WordPress.com, only display the widget if users have opted in.
	if ( defined( 'IS_WPCOM' ) && IS_WPCOM ) {
		return 'on' === $option['enabled'];
	}

	// On self-hosted and Atomic sites, assume that the user installing and activating the plugin is intention to display the widget.
	return empty( $option ) || 'on' === $option['enabled'];
}

function add_help_ukraine_settings_page() {
	add_options_page(
		esc_html__( 'Help Ukraine', 'help-ukraine' ),
		esc_html__( 'Help Ukraine', 'help-ukraine' ),
		'manage_options',
		'help-ukraine',
		'render_help_ukraine_settings_page'
	);
}
add_action( 'admin_menu', 'add_help_ukraine_settings_page' );

function render_help_ukraine_settings_page() {
	?>
	<div class="wrap">
		<h1>
			<?php esc_html_e( 'Help Ukraine Widget Settings', 'help-ukraine' ); ?>
		</h1>
		<form action="options.php" method="post">
			<?php
			settings_fields( 'help_ukraine_options' );
			do_settings_sections( 'help_ukraine_settings' );
			?>
			<input name="submit" class="button button-primary" type="submit" value="<?php esc_attr_e( 'Save Changes' ); ?>" />
		</form>
	</div>
	<?php
}

function register_settings_help_ukraine() {
	register_setting(
		'help_ukraine_options',
		'help_ukraine_options'
	);

	add_settings_section(
		'enabled_toggle',
		esc_html__( 'On/Off', 'help-ukraine' ),
		'__return_empty_string',
		'help_ukraine_settings'
	);

	add_settings_field(
		'help_ukraine_enabled',
		esc_html__( 'Enable the widget?', 'help-ukraine' ),
		'help_ukraine_enabled_field',
		'help_ukraine_settings',
		'enabled_toggle'
	);

	add_settings_section(
		'display_settings',
		esc_html__( 'Display Settings', 'help-ukraine' ),
		'__return_empty_string',
		'help_ukraine_settings'
	);

	add_settings_field(
		'help_ukraine_display_variation',
		esc_html__( 'Display Variation', 'help-ukraine' ),
		'help_ukraine_display_variation_field',
		'help_ukraine_settings',
		'display_settings'
	);

	add_settings_field(
		'help_ukraine_display_position',
		esc_html__( 'Display Position', 'help-ukraine' ),
		'help_ukraine_display_position_field',
		'help_ukraine_settings',
		'display_settings'
	);
}
add_action( 'admin_init', 'register_settings_help_ukraine' );

function help_ukraine_enabled_field() {
	?>
		<input type="checkbox" name="help_ukraine_options[enabled]" <?php checked( is_help_ukraine_widget_enabled(), true ); ?> />
	<?php
}

function help_ukraine_display_variation_field() {
	?>
		<select name="help_ukraine_options[variation]">
			<?php foreach ( help_ukraine_get_valid_display_variations() as $variation_key => $variation_display ) : ?>
				<option value="<?php echo esc_attr( $variation_key ); ?>" <?php selected( help_ukraine_get_setting_value( 'variation' ), $variation_key ); ?>>
					<?php echo esc_html( $variation_display ); ?>
				</option>
			<?php endforeach; ?>
		</select>
	<?php
}

function help_ukraine_display_position_field() {
	?>
	<select name="help_ukraine_options[position]">
		<?php foreach ( help_ukraine_get_valid_display_positions() as $variation_key => $variation_display ) : ?>
			<option value="<?php echo esc_attr( $variation_key ); ?>" <?php selected( help_ukraine_get_setting_value( 'position' ), $variation_key ); ?>>
				<?php echo esc_html( $variation_display ); ?>
			</option>
		<?php endforeach; ?>
	</select>
	<?php
}
