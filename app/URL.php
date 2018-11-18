<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class URL extends Model
{
    protected $table = 'u_r_ls';

    protected $fillable = [
        'slug', 'custom_slug', 'url'
    ];
}
