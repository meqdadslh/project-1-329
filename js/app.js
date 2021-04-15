/////////////////
//Get data from Google Sheet
//////////////////
$.ajax("https://spreadsheets.google.com/feeds/list/1GyHbgg5o-SfAhaJ3javxxubLgRTkHkC3DgCKtnO8JFk/1/public/full?alt=json")
    //.then for when the data arrives
    //.then for when the data when arrives
    .then((data) => {
        console.log(data)
            // Map over the data, generate a simpler dataset
        const projects = data.feed.entry.map((item) => {
            return {
                description: item.gsx$description.$t,
                git: item.gsx$git.$t,
                name: item.gsx$project.$t,
                image: item.gsx$image.$t,
                live: item.gsx$live.$t
            }
        })
        console.log(projects)
            /////////////////////////////////////////////////
            // jQuery to render your projects below
            /////////////////////////////////////////////////
            /////////////////////////////////////////////////
            ////////////////////////////////////////////////
        const final = projects.map((project) => {
            return `
                <my-card name=${project.name} git=${project.git} live=${project.live} image=${project.image}></my-card>`
        })
        console.log(final)
        const $section = $('section')
        $section.html(final.join(""))
    })
    //.catch in case of an error
    .catch((error) => {
        console.error(error)
    })