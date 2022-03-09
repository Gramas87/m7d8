import {Song,Artist,Album} from "../types/IData"
import {Card} from "react-bootstrap"
import Link from "react-router-dom"
import { constants } from "http2"

interface SongDetailProps {
    song: Song
  }

const SingleSong = ({ song }: SongDetailProps) => {
    return<div>
     {song.title} {song.id}
    </div>
}

export default SingleSong