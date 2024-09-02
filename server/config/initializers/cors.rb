Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "localhost:3000", "store.lvh.me:3000", "offen.lvh.me:3000", "store.lvh.me:3001"
    resource "*",
            headers: :any,
            methods: [:get, :post, :put, :patch, :delete, :options, :head],
    credentials: true
  end
end