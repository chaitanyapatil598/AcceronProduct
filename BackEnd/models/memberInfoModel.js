const mongoose = require("mongoose")

const memberInfoSchema =  mongoose.Schema({

 VillageName: {
    type: String,
    required: [true, "Village Name require"],
    
},
GramPanchayat: {
    type: String,
    required: [true, "GramPanchayat Name require"],
    
},
FamilyHead: {
    type: String,
    required: [true, "FamilyHead Name require"],
    
},
  MemberInfo: [
    {
        No: {
            type: Number,
            required: [true, "No require"],
            
        },
     
        Name: {
            type: String,
            required: [true, "Name require"],
            
        },
        Age: {
            type: Number,
            required: [true, "Age require"],
            
        },
        education: {
            type: String,
            required: [true, "education require"],
            
        },
      Buisness: {
        type: String,
        required: [true, "Buisness require"],
        
    },
      Contact: {
        type: Number,
        required: [true, "Contact require"],
        
    },
}
  ],
});



module.exports = mongoose.model("memberInfoSchema", memberInfoSchema)