// Please check for your names, thats the method you will be working with....thanks    
 

let School = {
                    name: " King's College",
                     address: " Lagos ",
                     student: [],
                      staff: [],


       // Adenike  
       //get list of all students in the school           
        getAllStudents: function(){
              return this.student
        },

        //search for a student by id
        getStudent: function(id){
              for (let i = 0; i < this.student.length; i++) {      
                     if (id === this.student[i].id){
                         return this.student[i]
                     }          
              }
        },

        //  Balikisu
        modifyStudent: function(id){},
        registerStudent: function(name, middlename, surname, state, age, gender, sclass, schoolfee){},

        //  Asiyah
        employStaff: function(name, middlename, surname, state, age, gender, subject, yearsOfExperience, qualification, contact, salary){},
        getAllStaffs: function(){},

        // Samuel
        getStaffId: function(id){},
        modifyStaff: function(id){},

        // Aminat animashaun , please use a splice method for the delete
        deleteStaff: function(id){},

        
        // faith
        getStudentByClass: function(){},
        deleteStudent: function(id){},
        
   
        // Sunday
        SortStudentByName: function(){},

        // michael
        getSchoolAccount: function(){},
        getSchoolInfo: function(){},
    
 };      
    
    
    
    
   