const Config = {
    name: "user",
    scale: 1,
    Links: [
        [
            "common",
            [
                ["reddit", "https://www.reddit.com"],
                ["youtube", "https://www.youtube.com"]
            ]
        ],
        [
            "league",
            [
                ["lolalytics", "https://lolalytics.com/"],
                ["op.gg", "na.op.gg"]
            ]op
        ],
        [
            "entertainment",
            [
                ["netflix", "https://www.netflix.com"],
                ["hulu", "https://www.hulu.com"],
                ["twist.moe", "https://twist.cmoe"]
            ]
        ],
        [
            "school",
            [
                ["canvas", "https://fisd.instructure.com/login/ldap"],
                ["drive", "https://drive.google.com/drive/"],
                ["docs", "https://docs.google.com/document/u/0/"],
                ["blank", "https://www.example.com"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
