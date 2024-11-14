import styles from "./VideoList.module.css"
import Card from "../Card"

function VideoList({ videos, empyHeading }){

    const count = videos.length
    let heading = empyHeading
    if(count > 0){
        const noun = count > 1 ? 'vídeos' : 'vídeo'
        heading = `${count} ${noun}`
    }

    return (
        <>
            <h2>{heading}</h2>
            <section className={styles.videolist}>
                { videos.map((video) => <Card id={video.id} key={video.id} /> ) }
            </section>
        </>
    )
}

export default VideoList;