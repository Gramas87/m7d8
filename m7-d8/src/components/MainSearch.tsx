import {useState, useEffect, ChangeEvent, FormEvent} from "react";
import {Form } from "react-bootstrap"
import { Song } from "../types/IData";
import SingleSong from "./SingleSong"

const MainSearch = () => {
    
    const [query, setQuery] = useState<string>("")
    const [results, setResults] = useState<Song[]> ([])
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
      }
    
    
    
    
    const fetchData = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
            if (response.ok){
                let searchResult = await response.json()
                console.log(searchResult)
                setResults(searchResult.data)
               
            }else{
                console.log("error fetch")
            }
        } catch (error) {
            console.log(error)
        }
       
    }

    useEffect(() => {
        fetchData();
      }, [query]);
    
return(
    <div>
    <Form >
    <Form.Control type="search" value={query}   onChange={handleChange} />
    {results.map((song) => (
          <SingleSong song={song} key={song.id} /> ))}
    </Form>
    </div>
)
}

export default MainSearch