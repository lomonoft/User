var app = angular.module('myApp',[]);
app.controller('Ctrl',function($scope, $http, $log){
    $scope.$log = $log;
    $scope.student_data = {};
    $scope.x = {};
    $scope.record = {};
    $scope.show_message = "";
    
    $scope.savetest = function() {
        $http({
            method: "post",
            url: "work.php",
            data: [$scope.student_data],
            headers: {'Content-type':'application/x-www-form-urlencoded'}
        }).then(
            function mySuccess(response){
                $scope.record = response.data;
                $scope.student_data = {};
            }
            ,function myError(response) {    
            }
        );      
    }//savetest

    $scope.deletetest = function(delete_id){
        $http({
            method: "post",
            url: "del.php",
            data: {"Rec_id":delete_id},
            headers: {'Content-type':'application/x-www-form-urlencoded'}
        }).then(
            function mySuccess(response){
                $scope.record = response.data;
                $scope.work = {};
            }
            ,function myError(response) {    
            }
        );      
    }//deletetest

    $scope.selecttest = function(){
        $http({
            method: "post",
            url: "selects.php",
            data: {"Rec_id":''},
            headers: {'Content-type':'application/x-www-form-urlencoded'}
        }).then(
            function mySuccess(response){
                $scope.record = response.data;
                $scope.work = {};
            }
            ,function myError(response) {    
           i }
        );      
    }//selecttest
    
    $scope.edittest = function(){
        $http({
            method:"post",
            url:"Edit.php",
            data:[$scope.student_data],
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        }).then(
            function mySuccess(response){
                $scope.records=response.data;
                $scope.test={};
            },
            function myError(response){
            }
        );
        }//Edittest
   
            $scope.recordedit = function (select_id){

                $http({
                    method:"post",
                    url:"onerecord.php",
                    date:{"Rec_id":select_id},
                    headers: {'Content-type':'application/x-www-form-urlencoded'}
                }).then
                (
                    function mySuccess(response){
                        $scope.student_data.student_ID = response.data[0].student_ID;
                        $scope.student_data.name = student_ID[0].name;
                        $scope.student_data.lastname = student_ID[0].lastname;
                        $scope.student_data.collegeyear = student_ID[0].collegeyear;
                        $scope.student_data.department = student_ID[0].department;
                        $scope.student_data.phone = student_ID[0].phone;
                        $scope.student_data.address = student_ID[0].address;
                        $scope.student_data.email = student_ID[0].email;
                    },
                    function myError(response){
                    }
                );
                alert('Update Mode');
            }//reccordedit
}
);

