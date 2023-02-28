<?php
/**
 * @package GO Speed Test
 * This is the class that initiates the plugin core functions.
 * It extends the Base class where the plugin variables are set.
 */

namespace GOSpeedTest;

class Init{

    public $plugin_path;
    public $plugin_url;
    public $plugin;

    public function __construct(){
        $this->plugin_path = plugin_dir_path(dirname(__FILE__, 1));
        $this->plugin_url = plugin_dir_url(dirname(__FILE__, 1));
        $this->plugin = plugin_basename(dirname(__FILE__, 2)) . '/go-ip-info.php';
    }

    /**
     * This method enqueues the plugin CSS and JS files
     * @param null 
     * @return void
     */
    public function enqueueScripts(){
        //enqueue all our scripts
        wp_enqueue_style('gospeedteststyle', $this->plugin_url . 'assets/style.css');
        wp_enqueue_script('gospeedtestscript', $this->plugin_url. 'assets/script.js', [], false, true);
    }

    /**
     * Method returns the shortcode snippet
     * @param null
     * @return string HTML code for the speed test
     */
    public function gospeedtest_ob(){

        $content = file_get_contents("$this->plugin_path/templates/speed.php");
        return $content;
            
    }

    /**
     * This function is the entry point to this plugin
     * It enqueues the asset files, sets admin page links and registers admin pages.
     * @param null
     * @return void()
     */
    public function init(){

        // enqueue the plugin css and javascript files
        add_action('wp_enqueue_scripts', array($this, 'enqueueScripts'));

        //add the shortcode method
        add_shortcode('gospeedtest_ob', [$this, 'gospeedtest_ob']);
            
    }

}

