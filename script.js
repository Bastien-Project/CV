$(document).ready(function () {
    let tpsLoad, tpsLoadBis, tpsDot, subStr, tpsWrite, tpsNext;
    if (sessionStorage.getItem("ArleadyView") === "true") {
        tpsLoad = tpsLoadBis = tpsDot = tpsWrite = tpsNext = 0;
        subStr = true;
    } else {
        tpsLoad = 1500;
        tpsLoadBis = 2000;
        tpsDot = 400;
        tpsWrite = 20; //35
        tpsNext = 800; //900
    }

    var initDot = document.getElementById("loading");
    var loading = setInterval(function () {
        if (initDot.innerHTML.length == 3) {
            initDot.innerHTML = "";
        } else {
            initDot.innerHTML += ".";
        }
    }, tpsDot);

    function hideLoading() {
        clearInterval(loading);
        $("#loadingH1").hide();
    }

    var infosCV = {
        intro: "CV DE BASTIEN THOMAS",
        lastname: "NOM: THOMAS",
        firstname: "PRENOM: BASTIEN",
        age: "ÂGE: 24 ANS",
        job: "POSTE: DÉVELOPPEUR",
        contactMail: "MAIL : b.thomas30712@gmail.com",
        contactPhone: "TEL : +33 (0)6 18 29 21 34",
        location: "LOCALISATION: MONTPELLIER / NÎMES, FRANCE",
        vehicle: "VÉHICULE: PERMIS B et A2, MOTORISÉ",
        programmingLanguage: "PYTHON | HTML5 | CSS | JAVASCRIPT | JAVA | C# | PHP | SQL",
        IDE: "NOTEPAD++ | VISUAL STUDIO | ECLIPSE | RIDER | PHPSTORM",
        env: "ENVIRONNEMENT: WINDOWS | LINUX",
        lang: "FRANÇAIS | ANGLAIS | ALLEMAND",
        professionalXP: "EXPÉRIENCE PROFESSIONNELLE: 2 ANS",
        schoolXP: "FORMATION: BAC+3 CONCEPTEUR ET DÉVELOPPEUR D'APPLICATIONS",
        schoolProject: "PROJET SCOLAIRE: Développer une application mobile en React avec une base de données en SQLite, une API en Node.js et site administrateur en PHP, JS, HTML et CSS",
        personnalProject: "PROJET PERSONNEL: https://github.com/Bastien-Project",
        hobbies: "CENTRE D'INTÉRÊT: SKI | SPORT MÉCANIQUE | MENUISERIE",
    };

    function initIntro(i) {
        if (!subStr) {
            $("#intro").addClass("sign cursor").text(infosCV.intro.substring(0, i));
        } else {
            $("#intro").addClass("sign cursor").text(infosCV.intro.substring(0, subStr));
        }

        if (i < infosCV.intro.length) {
            setTimeout(function () {
                initIntro(i + 1);
            }, tpsWrite);
        } else {
            $("#intro").removeClass("cursor");
            if (sessionStorage.getItem("ArleadyView") === "true") {
                loadingResume();
                initCV();
            } else {
                loadingResume();
            }
        }
    }

    function loadingResume() {
        $("#loadingMessage2").show();
        var dotAlpha = document.getElementById("alpha-loading");
        var loadingAlpha = setInterval(function () {
            if (dotAlpha.innerHTML.length == 3) {
                dotAlpha.innerHTML = "";
            } else {
                dotAlpha.innerHTML += ".";
                setTimeout(function () {
                    clearInterval(loadingAlpha);
                    $("#loadingMessage2").hide();
                    initCV();
                }, tpsLoad);
            }
        }, tpsDot);
    }

    function initCV() {
        function initLastName(i) {
            if (!subStr) {
                $("#lastname").addClass("sign cursor").text(infosCV.lastname.substring(0, i));
            } else {
                $("#lastname").addClass("sign cursor").text(infosCV.lastname.substring(0, subStr));
            }
            if (i < infosCV.lastname.length) {
                setTimeout(function () {
                    initLastName(i + 1);
                }, tpsWrite);
            } else {
                $("#lastname").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") === "true") {
                    initFirstName(0);
                    initAge(0);
                    initJob(0);
                    initContactMail(0);
                    initContactPhone(0);
                    initLocation(0);
                    initVehicle(0);
                    initProgrammingLanguage(0);
                    initIDE(0);
                    initEnv(0);
                    initLang(0);
                    initProfessionalXP(0);
                    initSchoolXP(0);
                    initSchoolProject(0);
                    initPersonnalProject(0);
                    initHobbies(0);
                } else {
                    setTimeout(function () {
                        initFirstName(0);
                    }, tpsNext);
                }
            }
        }

        function initFirstName(i) {
            if (!subStr) {
                $("#firstname").addClass("cursor").text(infosCV.firstname.substring(0, i));
            } else {
                $("#firstname").addClass("cursor").text(infosCV.firstname.substring(0, subStr));
            }
            if (i < infosCV.firstname.length) {
                setTimeout(function () {
                    initFirstName(i + 1);
                }, tpsWrite);
            } else {
                $("#firstname").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    ;
                    setTimeout(function () {
                        initAge(0);
                    }, tpsNext);

                }
            }
        }

        function initAge(i) {
            if (!subStr) {
                $("#age").addClass("cursor").text(infosCV.age.substring(0, i));
            } else {
                $("#age").addClass("cursor").text(infosCV.age.substring(0, subStr));
            }
            if (i < infosCV.age.length) {
                setTimeout(function () {
                    initAge(i + 1);
                }, tpsWrite);
            } else {
                $("#age").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    setTimeout(function () {
                        initJob(0);
                    }, tpsNext);
                }
            }
        }

        function initJob(i) {
            if (!subStr) {
                $("#job").addClass("sign cursor").text(infosCV.job.substring(0, i));
            } else {
                $("#job").addClass("sign cursor").text(infosCV.job.substring(0, subStr));
            }
            if (i < infosCV.job.length) {
                setTimeout(function () {
                    initJob(i + 1);
                }, tpsWrite);
            } else {
                $("#job").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    setTimeout(function () {
                        initContactMail(0);
                    }, tpsNext);
                }
            }
        }

        function initContactMail(i) {
            if (!subStr) {
                $("#contact-mail").addClass("sign cursor").text(infosCV.contactMail.substring(0, i));
            } else {
                $("#contact-mail").addClass("sign cursor").text(infosCV.contactMail.substring(0, subStr));
            }
            if (i < infosCV.contactMail.length) {
                setTimeout(function () {
                    initContactMail(i + 1);
                }, tpsWrite);
            } else {
                $("#contact-mail").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    setTimeout(function () {
                        initContactPhone(0);
                    }, tpsNext);
                }
            }
        }

        function initContactPhone(i) {
            if (!subStr) {
                $("#contact-phone").addClass("sign cursor").text(infosCV.contactPhone.substring(0, i));
            } else {
                $("#contact-phone").addClass("sign cursor").text(infosCV.contactPhone.substring(0, subStr));
            }
            if (i < infosCV.contactPhone.length) {
                setTimeout(function () {
                    initContactPhone(i + 1);
                }, tpsWrite);
            } else {
                $("#contact-phone").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    setTimeout(function () {
                        initLocation(0);
                    }, tpsNext);
                }
            }
        }

        function initLocation(i) {
            if (!subStr) {
                $("#location").addClass("sign cursor").text(infosCV.location.substring(0, i));
            } else {
                $("#location").addClass("sign cursor").text(infosCV.location.substring(0, subStr));
            }
            if (i < infosCV.location.length) {
                setTimeout(function () {
                    initLocation(i + 1);
                }, tpsWrite);
            } else {
                $("#location").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    setTimeout(function () {
                        initVehicle(0);
                    }, tpsNext);
                }
            }
        }

        function initVehicle(i) {
            if (!subStr) {
                $("#vehicle").addClass("sign cursor").text(infosCV.vehicle.substring(0, i));
            } else {
                $("#vehicle").addClass("sign cursor").text(infosCV.vehicle.substring(0, subStr));
            }
            if (i < infosCV.vehicle.length) {
                setTimeout(function () {
                    initVehicle(i + 1);
                }, tpsWrite);
            } else {
                $("#vehicle").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    setTimeout(function () {
                        initProgrammingLanguage(0);
                    }, tpsNext);
                }
            }
        }

        function initProgrammingLanguage(i) {
            if (!subStr) {
                $("#programming-language").addClass("sign cursor").text(infosCV.programmingLanguage.substring(0, i));
            } else {
                $("#programming-language").addClass("sign cursor").text(infosCV.programmingLanguage.substring(0, subStr));
            }
            if (i < infosCV.programmingLanguage.length) {
                setTimeout(function () {
                    initProgrammingLanguage(i + 1);
                }, tpsWrite);
            } else {
                $("#programming-language").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    setTimeout(function () {
                        initIDE(0);
                    }, tpsNext);
                }
            }
        }

        function initIDE(i) {
            if (!subStr) {
                $("#IDE").addClass("sign cursor").text(infosCV.IDE.substring(0, i));
            } else {
                $("#IDE").addClass("sign cursor").text(infosCV.IDE.substring(0, subStr));
            }
            if (i < infosCV.IDE.length) {
                setTimeout(function () {
                    initIDE(i + 1);
                }, tpsWrite);
            } else {
                $("#IDE").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    setTimeout(function () {
                        initEnv(0);
                    }, tpsNext);
                }
            }
        }

        function initEnv(i) {
            if (!subStr) {
                $("#env").addClass("sign cursor").text(infosCV.env.substring(0, i));
            } else {
                $("#env").addClass("sign cursor").text(infosCV.env.substring(0, subStr));
            }
            if (i < infosCV.env.length) {
                setTimeout(function () {
                    initEnv(i + 1);
                }, tpsWrite);
            } else {
                $("#env").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    setTimeout(function () {
                        initLang(0);
                    }, tpsNext);
                }
            }
        }

        function initLang(i) {
            if (!subStr) {
                $("#lang").addClass("sign cursor").text(infosCV.lang.substring(0, i));
            } else {
                $("#lang").addClass("sign cursor").text(infosCV.lang.substring(0, subStr));
            }
            if (i < infosCV.lang.length) {
                setTimeout(function () {
                    initLang(i + 1);
                }, tpsWrite);
            } else {
                $("#lang").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    setTimeout(function () {
                        initProfessionalXP(0);
                    }, tpsNext);
                }
            }
        }

        function initProfessionalXP(i) {
            if (!subStr) {
                $("#professional-XP").addClass("sign cursor").text(infosCV.professionalXP.substring(0, i));
            } else {
                $("#professional-XP").addClass("sign cursor").text(infosCV.professionalXP.substring(0, subStr));
            }
            if (i < infosCV.professionalXP.length) {
                setTimeout(function () {
                    initProfessionalXP(i + 1);
                }, tpsWrite);
            } else {
                $("#professional-XP").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    setTimeout(function () {
                        initSchoolXP(0);
                    }, tpsNext);
                }
            }
        }

        function initSchoolXP(i) {
            if (!subStr) {
                $("#school-XP").addClass("sign cursor").text(infosCV.schoolXP.substring(0, i));
            } else {
                $("#school-XP").addClass("sign cursor").text(infosCV.schoolXP.substring(0, subStr));
            }
            if (i < infosCV.schoolXP.length) {
                setTimeout(function () {
                    initSchoolXP(i + 1);
                }, tpsWrite);
            } else {
                $("#school-XP").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    setTimeout(function () {
                        initSchoolProject(0);
                    }, tpsNext);
                }
            }
        }

        function initSchoolProject(i) {
            if (!subStr) {
                $("#school-project").addClass("sign cursor").text(infosCV.schoolProject.substring(0, i));
            } else {
                $("#school-project").addClass("sign cursor").text(infosCV.schoolProject.substring(0, subStr));
            }
            if (i < infosCV.schoolProject.length) {
                setTimeout(function () {
                    initSchoolProject(i + 1);
                }, tpsWrite);
            } else {
                $("#school-project").removeClass("cursor");
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    setTimeout(function () {
                        initPersonnalProject(0);
                    }, tpsNext);
                }
            }
        }

        function initPersonnalProject(i) {
            if (i < infosCV.personnalProject.length) {
                if (!subStr) {
                    $("#personnal-project").addClass("sign cursor").text(infosCV.personnalProject.substring(0, i));
                } else {
                    $("#personnal-project").addClass("sign cursor").text(infosCV.personnalProject.substring(0, subStr));
                }
                setTimeout(function () {
                    initPersonnalProject(i + 1);
                }, tpsWrite);
            } else {
                $("#personnal-project").removeClass("cursor").html(
                    '<a href="https://github.com/Bastien-Project" target="_blank">' + infosCV.personnalProject + '</a>'
                );
                if (sessionStorage.getItem("ArleadyView") != "true") {
                    setTimeout(function () {
                        initHobbies(0);
                    }, tpsNext);
                }
            }
        }

        function initHobbies(i) {
            if (!subStr) {
                $("#hobbies").addClass("sign cursor").text(infosCV.hobbies.substring(0, i));
            } else {
                $("#hobbies").addClass("sign cursor").text(infosCV.hobbies.substring(0, subStr));
            }
            if (i < infosCV.hobbies.length) {
                setTimeout(function () {
                    initHobbies(i + 1);
                }, tpsWrite);
            } else {
                $("#hobbies").removeClass("cursor");
                sessionStorage.setItem("ArleadyView", "true");
            }
        }

        initLastName(0);
    }

    setTimeout(function () {
        hideLoading();
        initIntro(0);
    }, tpsLoadBis);

});
