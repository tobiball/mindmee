use rocket::Rocket;
use rocket_cors::{AllowedOrigins, CorsOptions};
use rocket::http::Method;


pub mod commands;

pub fn fuel(rocket: Rocket) -> Rocket {
    let mut rocket = rocket;
    let cors = CorsOptions::default().allowed_origins(AllowedOrigins::all())
        .allowed_methods(
            vec![Method::Get, Method::Post, Method::Patch]
                .into_iter()
                .map(From::from)
                .collect(),
        )
        .allow_credentials(true).to_cors().unwrap();


    rocket = commands::fuel(rocket);
    rocket.attach(cors)

}
