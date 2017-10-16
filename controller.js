
    let add = angular.module("add", []);
    add.controller("ajout", function ($scope) {
          $scope.ajouts = [{
              'nom': '',
              'prenom': '',
              'email': ''
            }
          ];
          $scope.addRow = function () {
            $scope.ajouts.push({
              'nom': $scope.nom,
              'prenom': $scope.prenom,
              'email': $scope.email
            });
            /*Permet de redéfinir les champs à nouveau vide*/
            $scope.nom = '';
            $scope.prenom = '';
            $scope.email = '';
          }
    });