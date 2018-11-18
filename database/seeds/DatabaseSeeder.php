<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
          'id' => 1,
          'name' => 'Jit Ooi',
          'email' => 'a@a.com',
          'password' => bcrypt('a@a.com'),

        ]);
        DB::table('u_r_ls')->insert([
          'user_id' => 1,
          'slug' => '1a',
          'custom_slug' => 'about-tia',
          'redirect_to_url' => 'https://www.techinasia.com/car-rental-startup-smove'
        ]);
    }
}
