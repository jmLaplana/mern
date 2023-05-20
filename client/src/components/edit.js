import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   song: "",
   artist: "",
   videoURL: "",
   genre: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     song: form.song,
     artist: form.artist,
     videoURL: form.videoURL,
     genre: form.genre,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Song</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="song">Song: </label>
         <input
           type="text"
           className="form-control"
           id="song"
           value={form.song}
           onChange={(e) => updateForm({ song: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="artist">Artist: </label>
         <input
           type="text"
           className="form-control"
           id="artist"
           value={form.artist}
           onChange={(e) => updateForm({ artist: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="videoURL">Video URL: </label>
         <input
           type="text"
           className="form-control"
           id="videoURL"
           value={form.videoURL}
           onChange={(e) => updateForm({ videoURL: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="genre">Genre: </label>
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
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Song"
           className="btn btn-primary"
         />
       </div>
      </div>
     </form>
   </div>
 );
}
