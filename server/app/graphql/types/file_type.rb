class Types::FileType < Types::BaseScalar
  description "ActionDispatch::Http::UploadedFile"

  def self.coerce_input(action_dispatch_uploaded_file, ctx)
    action_dispatch_uploaded_file
  end
end