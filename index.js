async function Post(event = "", data = {}) {
    console.log(`Post called: ${event}`, data); 

    try {
        const response = await fetch(`https://${GetParentResourceName()}/${event}`, {
            method: "POST",
            mode: "no-cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        });

        console.log("Fetch response:", response); 
        return response.json();
    } catch (error) {
        console.error("Fetch error:", error); 
    }
}

export default Post;