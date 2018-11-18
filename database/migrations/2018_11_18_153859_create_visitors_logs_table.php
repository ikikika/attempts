<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVisitorsLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visitors_logs', function (Blueprint $table) {
            $table->increments('id');
            // $table->integer('slug_id')->unsigned();
            // $table->foreign('slug_id')
            //     ->references('id')
            //     ->on('u_r_ls');
            $table->integer('slug_id');
            $table->string('ip_add');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('visitors_logs');
    }
}
