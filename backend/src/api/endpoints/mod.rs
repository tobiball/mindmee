use rocket::Rocket;
use rocket_cors::CorsOptions;

pub mod users;
pub mod notes;

pub fn fuel(rocket: Rocket) -> Rocket {
    let mut rocket = rocket;
    let cors = CorsOptions::default().to_cors().unwrap();


    rocket = notes::fuel(rocket);
    rocket.attach(cors)

}
