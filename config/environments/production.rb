HeirBnb::Application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # Code is not reloaded between requests.
  config.cache_classes = true

  config.eager_load = true

  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true

  config.serve_static_assets = true

  # Compress JavaScripts and CSS.
  config.assets.js_compressor = :uglifier

  config.assets.compile = true

  # Generate digests for assets URLs.
  config.assets.digest = true

  # Version of your assets, change this if you want to expire all your assets.
  config.assets.version = '1.0'


  config.log_level = :info


  config.i18n.fallbacks = true

  # Send deprecation notices to registered listeners.
  config.active_support.deprecation = :notify

  config.log_formatter = ::Logger::Formatter.new

  config.paperclip_defaults = {
    :storage => :s3,
    :s3_protocol => 'http',
    :url => ':s3_domain_url',
    :path => "images/:class/:id.:style.:extension",
    :s3_credentials => {
      :bucket => ENV['AWS_BUCKET_PRODUCTION'],
      :access_key_id => ENV['AWS_ACCESS_KEY_ID'],
      :secret_access_key => ENV['AWS_SECRET_ACCESS_KEY'],
      :s3_host_name => 's3-us-west-1.amazonaws.com'
    }
  }
end
