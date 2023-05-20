import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   song: "",
   artist: "",
   videoURL: "",
   Genre: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ song: "", artist: "", videoURL: "", genre: "",});
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="song">Song</label>
         <input
           type="text"
           className="form-control"
           id="song"
           value={form.song}
           onChange={(e) => updateForm({ song: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="artist">Artist</label>
         <input
           type="text"
           className="form-control"
           id="artist"
           value={form.artist}
           onChange={(e) => updateForm({ artist: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="videoURL">Video URL</label>
         <input
           type="text"
           className="form-control"
           id="videoURL"
           value={form.videoURL}
           onChange={(e) => updateForm({ videoURL: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="genre">Genre</label>
         <input
           type="text"
           className="form-control"
           id="genre"
           value={form.genre}
           onChange={(e) => updateForm({ genre: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="genreOptions"
             id="pop"
             value="Pop"
             checked={form.level === "pop"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="pop" className="form-check-label">Pop</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="rock"
             id="rock"
             value="rock"
             checked={form.level === "rock"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="rock" className="form-check-label">Rock</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="genreOptions"
             id="country"
             value="country"
             checked={form.level === "country"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="country" className="form-check-label">Country</label>
       </div>
       <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="genreOptions"
             id="classical"
             value="classical"
             checked={form.level === "classical"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="classical" className="form-check-label">Classical</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="genreOptions"
             id="dance"
             value="dance"
             checked={form.level === "dance"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="dance" className="form-check-label">Dance</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="genreOptions"
             id="rap"
             value="rap"
             checked={form.level === "rap"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="rap" className="form-check-label">Rap</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="genreOptions"
             id="others"
             value="others"
             checked={form.level === "others"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="others" className="form-check-label">Others</label>
         </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create Song"
           className="btn btn-primary"
         />
       </div>
      </div>
     </form>
   </div>
 );
}
