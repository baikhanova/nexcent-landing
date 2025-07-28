import { useEffect } from "react";

export default function AudioPlayer() {
    useEffect(() => {
        const handleInteraction = () => {
            const audio = document.getElementById("bg-audio");
            if (audio) {
                audio.play().catch(() => {
                    console.warn("Автозапуск заблокирован браузером");
                });
            }
            window.removeEventListener("click", handleInteraction);
        };

        window.addEventListener("click", handleInteraction);

        return () => {
            window.removeEventListener("click", handleInteraction);
        };
    }, []);

    return (
        <audio id="bg-audio" src="/assets/music/song.mp3" loop />
    );
}