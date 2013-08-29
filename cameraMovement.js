#pragma strict

var speed = 20.0;
var speed2 = 500.0;

private var moveDirection = Vector3.zero;
private var moveDirection2 = Vector3.zero;

function Start() {

}


function FixedUpdate() {



moveDirection = new Vector3(Input.GetAxis("Horizontal"),0,Input.GetAxis("Vertical"));
moveDirection = transform.TransformDirection(moveDirection);
moveDirection *= speed;
moveDirection.y = 0.0;
       
       if(Input.GetAxis ("Mouse ScrollWheel")) {
moveDirection2 = new Vector3(0,Input.GetAxis("Mouse ScrollWheel"),0);
moveDirection2 = transform.TransformDirection(moveDirection2);
moveDirection2 *= speed2;
moveDirection2.x = 0.0;
        moveDirection2.z = 0.0;
       
           
       
       }
       
     
       
       else{
        moveDirection2.y = 0.0;
        moveDirection2.x = 0.0;
        moveDirection2.z = 0.0; 
        }

             


    
var controller : CharacterController = GetComponent (CharacterController);
var flags = controller.Move(moveDirection * Time.deltaTime);

var control : CharacterController = GetComponent (CharacterController);
var flag = controller.Move(moveDirection2 * Time.deltaTime);
}

@script RequireComponent(CharacterController)