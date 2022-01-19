use rocket::Rocket;
use rocket_cors::CorsOptions;

pub mod commands;

pub fn fuel(rocket: Rocket) -> Rocket {
    let mut rocket = rocket;
    let cors = CorsOptions::default().to_cors().unwrap();


    rocket = commands::fuel(rocket);
    rocket.attach(cors)

}
