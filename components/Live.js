import react, { useEffect, useState } from "react";

export default function Live() {
const[live, setLive] = useState(false);

    function liveStream() {
        const date = new Date();
        const start = new Date("October 31, 2022 16:00:00");
        const end = new Date("November 6, 2022 18:00:00");

        if (date > start && date < end) {
            setLive(true);
        } else {
            setLive(false);
        }
    }

useEffect(() => {
    liveStream();
  });


return (
<>

{ live && (<span className="flex h-2 w-2 ">
   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
   <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
 </span>)}

</>

    )
}