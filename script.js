$(document).ready(function () {
    var initDot = document.getElementById("loading");
    var loading = setInterval(function () {
        if (initDot.innerHTML.length == 5) {
            initDot.innerHTML = "";
        } else {
            initDot.innerHTML += ".";
        }
    }, 350); // Vitesse des points

    function hideLoading() {
        clearInterval(loading);
        $("#loadingH1").hide();
    }

    function initProgram() {
        var $intro = "CV DE BASTIEN THOMAS";
        var $lastname = "NOM: THOMAS";
        var $firstname = "PRENOM: BASTIEN";
        var $age = "ÂGE: 24 ANS";
        var $job = "POSTE: DÉVELOPPEUR";
        var $contactMail = "MAIL : b.thomas30712@gmail.com";
        var $contactPhone = "TEL : +33 (0)6 18 29 21 34";
        var $location = "LOCALISATION: MONTPELLIER / NÎMES, FRANCE";
        var $vehicle = "VÉHICULE: PERMIS B et A2, MOTORISÉ";
        var $programmingLanguage = "PYTHON | HTML5 | CSS | JAVASCRIPT | JAVA | C# | PHP | SQL";
        var $IDE = "NOTEPAD++ | VISUAL STUDIO | ECLIPSE | RIDER | PHPSTORM";
        var $env = "ENVIRONNEMENT: WINDOWS | LINUX";
        var $lang = "FRANÇAIS | ANGLAIS | ALLEMAND";
        var professionalXP = "EXPÉRIENCE PROFESSIONNELLE: 2 ANS";
        var $schoolXP = "FORMATION: BAC+2 DÉVELOPPEUR WEB";
        var $schoolProject = "PROJET SCOLAIRE: SITE WEB DE GESTION DE BIBLIOTHÈQUE";
        var $personnalProject = "PROJET PERSONNEL: SITE WEB DE GESTION DE BIBLIOTHÈQUE";
        var $hobbies = "CENTRE D'INTÉRÊT: SKI | SPORT MÉCANIQUE | MENUISERIE";

        function initIntro(i) {
            $("#intro").addClass("sign cursor").text($intro.substring(0, i));
            if (i < $intro.length) {
                setTimeout(function () {
                    initIntro(i + 1);
                }, 35);
            } else {
                $("#intro").removeClass("cursor");
                loadingResume(0);
            }
        }

        function loadingResume() {
            $("#loadingMessage2").show();
            var dotAlpha = document.getElementById("alpha-loading");
            var loadingAlpha = setInterval(function () {
                if (dotAlpha.innerHTML.length == 6) {
                    dotAlpha.innerHTML = "";
                } else {
                    dotAlpha.innerHTML += ".";
                    setTimeout(function () {
                        clearInterval(loadingAlpha);
                        $("#loadingMessage2").hide();
                        initCV();
                    }, 2000);
                }
            }, 350);
        }

        function initCV() {
            function initLastName(i) {
                $("#lastname").addClass("sign cursor").text($lastname.substring(0, i));
                if (i < $lastname.length) {
                    setTimeout(function () {
                        initLastName(i + 1);
                    }, 35);
                } else {
                    $("#lastname").removeClass("cursor");
                    setTimeout(function () {
                        initFirstName(0);
                    }, 1500);
                }
            }

            function initFirstName(i) {
                $("#firstname").addClass("sign cursor").text($firstname.substring(0, i));
                if (i < $firstname.length) {
                    setTimeout(function () {
                        initFirstName(i + 1);
                    }, 35);
                } else {
                    $("#firstname").removeClass("cursor");
                    setTimeout(function () {
                        initAge(0);
                    }, 1500);
                }
            }

            function initAge(i) {
                $("#age").addClass("sign cursor").text($age.substring(0, i));
                if (i < $age.length) {
                    setTimeout(function () {
                        initAge(i + 1);
                    }, 35);
                } else {
                    $("#age").removeClass("cursor");
                    setTimeout(function () {
                        initJob(0);
                    }, 1500);
                }
            }

            function initJob(i) {
                $("#job").addClass("sign cursor").text($job.substring(0, i));
                if (i < $job.length) {
                    setTimeout(function () {
                        initJob(i + 1);
                    }, 35);
                } else {
                    $("#job").removeClass("cursor");
                    setTimeout(function () {
                        initContactMail(0);
                    }, 1500);
                }
            }

            function initContactMail(i) {
                $("#contact-mail").addClass("sign cursor").text($contactMail.substring(0, i));
                if (i < $contactMail.length) {
                    setTimeout(function () {
                        initContactMail(i + 1);
                    }, 35);
                } else {
                    $("#contact-mail").removeClass("cursor");
                    setTimeout(function () {
                        initContactPhone(0);
                    }, 1500);
                }
            }

            function initContactPhone(i) {
                $("#contact-phone").addClass("sign cursor").text($contactPhone.substring(0, i));
                if (i < $contactPhone.length) {
                    setTimeout(function () {
                        initContactPhone(i + 1);
                    }, 35);
                } else {
                    $("#contact-phone").removeClass("cursor");
                    setTimeout(function () {
                        initLocation(0);
                    }, 1500);
                }
            }

            function initLocation(i) {
                $("#location").addClass("sign cursor").text($location.substring(0, i));
                if (i < $location.length) {
                    setTimeout(function () {
                        initLocation(i + 1);
                    }, 35);
                } else {
                    $("#location").removeClass("cursor");
                    setTimeout(function () {
                        initVehicle(0);
                    }, 1500);
                }
            }

            function initVehicle(i) {
                $("#vehicle").addClass("sign cursor").text($vehicle.substring(0, i));
                if (i < $vehicle.length) {
                    setTimeout(function () {
                        initVehicle(i + 1);
                    }, 35);
                } else {
                    $("#vehicle").removeClass("cursor");
                    setTimeout(function () {
                        initProgrammingLanguage(0);
                    }, 1500);
                }
            }

            function initProgrammingLanguage(i) {
                $("#programming-language").addClass("sign cursor").text($programmingLanguage.substring(0, i));
                if (i < $programmingLanguage.length) {
                    setTimeout(function () {
                        initProgrammingLanguage(i + 1);
                    }, 35);
                } else {
                    $("#programming-language").removeClass("cursor");
                    setTimeout(function () {
                        initIDE(0);
                    }, 1500);
                }
            }

            function initIDE(i) {
                $("#IDE").addClass("sign cursor").text($IDE.substring(0, i));
                if (i < $IDE.length) {
                    setTimeout(function () {
                        initIDE(i + 1);
                    }, 35);
                } else {
                    $("#IDE").removeClass("cursor");
                    setTimeout(function () {
                        initEnv(0);
                    }, 1500);
                }
            }

            function initEnv(i) {
                $("#env").addClass("sign cursor").text($env.substring(0, i));
                if (i < $env.length) {
                    setTimeout(function () {
                        initEnv(i + 1);
                    }, 35);
                } else {
                    $("#env").removeClass("cursor");
                    setTimeout(function () {
                        initLang(0);
                    }, 1500);
                }
            }

            function initLang(i) {
                $("#lang").addClass("sign cursor").text($lang.substring(0, i));
                if (i < $lang.length) {
                    setTimeout(function () {
                        initLang(i + 1);
                    }, 35);
                } else {
                    $("#lang").removeClass("cursor");
                    setTimeout(function () {
                        initProfessionalXP(0);
                    }, 1500);
                }
            }

            function initProfessionalXP(i) {
                $("#professional-XP").addClass("sign cursor").text(professionalXP.substring(0, i));
                if (i < professionalXP.length) {
                    setTimeout(function () {
                        initProfessionalXP(i + 1);
                    }, 35);
                } else {
                    $("#professional-XP").removeClass("cursor");
                    setTimeout(function () {
                        initSchoolXP(0);
                    }, 1500);
                }
            }

            function initSchoolXP(i) {
                $("#school-XP").addClass("sign cursor").text($schoolXP.substring(0, i));
                if (i < $schoolXP.length) {
                    setTimeout(function () {
                        initSchoolXP(i + 1);
                    }, 35);
                } else {
                    $("#school-XP").removeClass("cursor");
                    setTimeout(function () {
                        initSchoolProject(0);
                    }, 1500);
                }
            }

            function initSchoolProject(i) {
                $("#school-project").addClass("sign cursor").text($schoolProject.substring(0, i));
                if (i < $schoolProject.length) {
                    setTimeout(function () {
                        initSchoolProject(i + 1);
                    }, 35);
                } else {
                    $("#school-project").removeClass("cursor");
                    setTimeout(function () {
                        initPersonnalProject(0);
                    }, 1500);
                }
            }

            function initPersonnalProject(i) {
                $("#personnal-project").addClass("sign cursor").text($personnalProject.substring(0, i));
                if (i < $personnalProject.length) {
                    setTimeout(function () {
                        initPersonnalProject(i + 1);
                    }, 35);
                } else {
                    $("#personnal-project").removeClass("cursor");
                    setTimeout(function () {
                        initHobbies(0);
                    }, 1500);
                }
            }

            function initHobbies(i) {
                $("#hobbies").addClass("sign cursor").text($hobbies.substring(0, i));
                if (i < $hobbies.length) {
                    setTimeout(function () {
                        initHobbies(i + 1);
                    }, 35);
                } else {
                    $("#hobbies").removeClass("cursor");
                }
            }

            initLastName(0);
        }

        initIntro(0);
    }

    setTimeout(function () {
        hideLoading();
        initProgram();
    }, 1500);
});
