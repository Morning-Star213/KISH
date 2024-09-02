# CarrierWave.configure do |config|
#   config.asset_host = Settings.image_url if Rails.env.development?
# end

# module CarrierWave
#   module RMagick
#     # Rotates the image based on the EXIF Orientation
#     def fix_exif_rotation
#       manipulate! do |img|
#         img.auto_orient!
#         img = yield(img) if block_given?
#         img
#       end
#     end
#   end
# end
#
if ENV['S3_BUCKET_NAME']
  CarrierWave.configure do |config|
    # config.storage = 'fog/aws'
    config.storage = :fog
    config.fog_credentials = {
        provider: 'AWS',
        use_iam_profile: false,
        aws_access_key_id: ENV['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
        region: ENV['AWS_S3_REGION']
    }
    config.fog_directory = ENV['S3_BUCKET_NAME']
  end
end

CarrierWave::SanitizedFile.sanitize_regexp = /[^[:word:]\.\-\+]/
