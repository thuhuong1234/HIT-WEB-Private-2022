
    var courses = ['C++', 'Java', 'Javascript'];
    // them phan tu vao cuoi mang 
    function addCourse(n,m){
            courses.push(m);
            console.log(courses);
    }
    addCourse(courses,'Go');

    //lay ra phan tu dau tien
    function getFirstElement(courses){
        return courses[0];
    }      
    var firstElement = getFirstElement(courses);
    console.log(firstElement);
    
    //noi cac phan tu thanh 1 chuoi
    function joinArr(n,m){
        let c="";
        for(let i=0; i<n.length; i++){
            c+=n[i];
        
            if(i!=n.length-1){
                c+=m;
            }
        }
        return c;
        
    }

    var result1 = joinArr(courses,",");
    var result2 = joinArr(courses,"*");
    console.log(result1);
    console.log(result2);
