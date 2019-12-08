/// <reference path="Script.js"/>
mayApp.filter("filterGender",function(){
                    return function(gender){
                        switch(gender){
                            case 1:
                                return 'Male';
                            case 2:
                                return 'Female';
                            case 3:
                                return 'Not Discolsed';
                                     }
                    }
                })