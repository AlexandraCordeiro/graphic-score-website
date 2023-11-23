function htmlBuilder() {
    const sheetMusic = document.createElement('div')
    sheetMusic.setAttribute('id', 'sheet-music')


    const header = document.createElement('div')
    header.classList.add('header')
    header.setAttribute('id', 'header')


    const title = document.createElement('h1')
    title.classList.add('title')
    title.classList.add('text')
    title.textContent = 'Graphic Sonata'

    const subtitle = document.createElement('p')
    subtitle.classList.add('subtitle')
    subtitle.classList.add('text')
    subtitle.textContent = 'Selected and Arranged for the Web'

    //container text
    const containerText = document.createElement('div')
    containerText.classList.add('container-text')

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.classList.add('text')
    tempo.textContent = 'Allegro, con affeto'

    const composer = document.createElement('p')
    composer.classList.add('composer')
    composer.classList.add('text')
    composer.textContent = 'Alexandra Cordeiro Op.13 No.2'

    containerText.appendChild(tempo)
    containerText.appendChild(composer)
    
    header.appendChild(title)
    header.appendChild(subtitle)
    header.appendChild(containerText)
    

    //SCORE
    const score = document.createElement('div')
    score.classList.add('score')
    score.setAttribute('id', 'score')

    
    //create staffs and staff-text
    let j, p
    j = 0
    p = 0
    for (let i = 0; i < 16; i++) {
        if (i % 2 == 0) {
            
            const newStaff = document.createElement('div')
            var id = `staff${p + 1}`
            newStaff.setAttribute('id', id)
            newStaff.classList.add(id)

            const containerLines = document.createElement('div')
            containerLines.setAttribute('id', 'container-lines')
            containerLines.classList.add('container-lines')

            
            for (let k = 0; k < 5; k++) {
                const line = document.createElement('div')
                line.classList.add('line')
                if (i == 0 && k < 2) {
                    let lineId = `line${k + 1}`
                    line.setAttribute('id', lineId)
                }
                containerLines.appendChild(line)
            }
            
            newStaff.appendChild(containerLines)
            score.appendChild(newStaff)
            p++
        }

        else {
            const newStaffText = document.createElement('div')
            var id, className
            if (j == 0) {
                id = 'staff-text'
                className = `staff-text-${(j%8) + 1}`
            } else {
                id = `staff-text-${(j%8) + 1}`
                className = id
            }
            newStaffText.classList.add(className)
            newStaffText.setAttribute('id', id)
            score.appendChild(newStaffText)
            j++
        }
    }

    //add header and score to document body
    sheetMusic.appendChild(header)
    sheetMusic.appendChild(score)
    document.body.appendChild(sheetMusic)



    //footer
    //footer
    const linksInfo = [{"href": "https://open.spotify.com/user/a87tywngw6y0he5xzdu8gjst4?si=d36a0469831844d4", "title": "Listen to my curated playlists!", "iconClass": ['bi','bi-spotify', 'icon']},
                        {"href": "https://www.linkedin.com/in/alexandra-cordeiro-8b011721b/", "title": "Check out my LinkedIn", "iconClass": ['bi','bi-linkedin', 'icon']},
                        {"href": "mailto:acordeiro2002@gmail.com", "title": "Contact", "iconClass": ['bi', 'bi-envelope-at-fill', 'icon']}]

    const footer = document.createElement('footer')
    const listIcons = document.createElement('ul')
    listIcons.classList.add("list-icons")

    for(let i = 0; i < 4; i++) {
        const listIcon = document.createElement('li')
        const reference = document.createElement('a')
        const icon = document.createElement('i')

        //3 links
        if(i != 3) {
            reference.href = linksInfo[i].href
            reference.title = linksInfo[i].title
            icon.classList.add(linksInfo[i].iconClass[0], linksInfo[i].iconClass[1], linksInfo[i].iconClass[2])
        } // download icon
        else {
            reference.setAttribute('id', 'downloadButton')
            reference.classList.add('download-button')
            reference.title = 'Download your graphic score here!'
            icon.classList.add('bi','bi-file-earmark-arrow-down-fill', 'icon')
        }
        reference.appendChild(icon)
        listIcon.appendChild(reference)
        listIcons.appendChild(listIcon)
    }

    footer.appendChild(listIcons)
    document.body.appendChild(footer)


    //add text between staffs
    let text1 = document.createElement('div')
    text1.classList.add('inner-text')
    text1.classList.add('text')
    text1.textContent = 'Hi, it\'s Alexandra! I\'m currently studying Design & Multimedia for my master\'s degree at University of Coimbra'

    let text2 = document.createElement('div')
    text2.classList.add('inner-text-2')
    text2.classList.add('text')
    text2.textContent = 'In 2023 I gratuated with a Computer Science degree'

    let text3 = document.createElement('div')
    text3.classList.add('inner-text')
    text3.classList.add('text')
    text3.textContent = 'I am very passionate about Music, especially classical and jazz, and I play the piano'

    let text4 = document.createElement('div')
    text4.classList.add('inner-text-2')
    text4.classList.add('text')
    text4.textContent = 'Outside of school, I like to play with my kitten Mozart, crochet and read'

    let text5 = document.createElement('div')
    text5.classList.add('inner-text')
    text5.classList.add('text')
    text5.textContent = 'Click and drag the shapes to form a beautiful graphic score! Have fun :)'

    document.getElementById("staff-text").appendChild(text1)
    document.getElementById("staff-text-2").appendChild(text2)
    document.getElementById("staff-text-4").appendChild(text3)
    document.getElementById("staff-text-5").appendChild(text4)
    document.getElementById("staff-text-6").appendChild(text5)    
}





document.addEventListener("DOMContentLoaded", htmlBuilder);
