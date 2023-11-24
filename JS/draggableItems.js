document.addEventListener("DOMContentLoaded", function() {
    
    window.onload = () => {
        const header = document.getElementById("header")
        const marginWidth = header.getBoundingClientRect().left
        const marginTop = header.getBoundingClientRect().height + 10
        let lastWindowWidth = window.innerWidth;
        let lastWindowHeight = window.innerHeight;
    
        function randomNumber(min, max) {
            return parseInt(Math.random() * (max - min) + min);
        }
    
    
        function draggable(divElement) {
            let offsetX, offsetY
            
            const move = (e) => {
                divElement.style.left = `${e.clientX - offsetX}px`;
                divElement.style.top = `${e.clientY - offsetY}px`;
            }
            
            divElement.addEventListener("mousedown", (e) => {
                offsetX = e.clientX - divElement.offsetLeft;
                offsetY = e.clientY - divElement.offsetTop;
                document.addEventListener("mousemove", move);
    
            })
    
            document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", move);
            });
        }
    
        function draggableMobile(divElement) {
            let offsetX, offsetY;
        
            const move = (e) => {
                e.preventDefault(); // Prevent default touch behavior (e.g., scrolling)
                divElement.style.left = `${e.touches[0].clientX - offsetX}px`;
                divElement.style.top = `${e.touches[0].clientY - offsetY}px`;
            };
        
            divElement.addEventListener("touchstart", (e) => {
                offsetX = e.touches[0].clientX - divElement.offsetLeft;
                offsetY = e.touches[0].clientY - divElement.offsetTop;
                document.addEventListener("touchmove", move);
            });
        
            document.addEventListener("touchend", () => {
                document.removeEventListener("touchmove", move);
            });
        }
        
    
    
        function downloadImage() {
            const downloadButton = document.getElementById("downloadButton")
    
            downloadButton.addEventListener("click", () => {
                console.log("click")
                var sheetMusic = document.getElementById("sheet-music")
    
                html2canvas(sheetMusic, {
                    scale: window.devicePixelRatio,
                    ignoreElements: function (element) {
                        return (element.classList.contains("inner-text") || element.classList.contains("inner-text-2") || element.tagName === 'FOOTER')
                    }
                }).then(function(canvas) {
                    const base64image = canvas.toDataURL("image/png");
                    var anchor = document.createElement('a');
                    anchor.setAttribute("href", base64image)
                    anchor.setAttribute("download", "my-graphic-score.png")
                    anchor.click();
                    anchor.remove();
                })
            })
        }
    
      
        function createRandomCircle(id) {
            const score = document.getElementById(id);
            let scoreW = score.getBoundingClientRect().width;
            let scoreH = score.getBoundingClientRect().height;
          
            let colors = ["#2f368b", "#1e1613", "#e33721"];
            let randomX, randomY, d;
          
            // Get the current scroll position
            let scrollTop = document.documentElement.scrollTop;
          
            // Get the top position of the score element relative to the viewport
            let scoreTop = score.getBoundingClientRect().top + scrollTop;
          
            for (let i = 0; i < 15; i++) {
                d = scoreW / randomNumber(16, 32);
                randomX = randomNumber(score.getBoundingClientRect().left + d / 2, scoreW);
                randomY = randomNumber(scoreTop + d / 2, scoreH + marginTop);
            
                const circle = document.createElement("div");
                circle.classList.add("circle");
                circle.setAttribute("id", "circle");
            
                circle.style.left = `${randomX}px`;
                circle.style.top = `${randomY}px`;
                circle.style.width = `${d}px`;
                circle.style.height = `${d}px`;
                circle.style.opacity = `0.8`;
                circle.style.backgroundColor = `${colors[randomNumber(0, 2)]}`;
            
                draggable(circle);
                draggableMobile(circle);
                document.getElementById(id).appendChild(circle);
            }
          }
          
          
    
        function createCircleStroke(id) {
            const div = document.getElementById(id)
    
            const circleStroke = document.createElement('div');
            
            circleStroke.classList.add('circleStroke');
            var w = div.getBoundingClientRect().width
            var h = div.getBoundingClientRect().height
            
            const d = parseInt(w/2);
    
            let posX = marginWidth + d/5;
            let posY = parseInt(h/2.2)
    
            circleStroke.style.left = `${posX}px`;
            circleStroke.style.top = `${posY}px`;
            circleStroke.style.width = `${d}px`;
            circleStroke.style.height = `${d}px`;
            circleStroke.style.opacity = `0.7`
            circleStroke.style.borderColor = '#e13821'
    
            draggable(circleStroke)
            draggableMobile(circleStroke)
            document.getElementById(id).appendChild(circleStroke);
        }
       
    
        function createPianoKeys(id, option) {
            const div = document.getElementById(id)
            let scrollTop = document.documentElement.scrollTop;
            let scoreTop = score.getBoundingClientRect().top + scrollTop;
    
            let divW = div.getBoundingClientRect().width
            let divH = div.getBoundingClientRect().height
            let gap = document.getElementById("staff-text").getBoundingClientRect().height
            let posX
            if (option == "left") {
                posX = div.getBoundingClientRect().left
    
            }
            if (option)
    
            switch(option) {
                case "left":
                    posX = div.getBoundingClientRect().left
                    break
                case "right":
                    posX = div.getBoundingClientRect().left + divW/2
            }
    
            let posY = div.getBoundingClientRect().top + scrollTop
            let rectWidth = divW/32
            let rectHeight = divH*2 + gap
            
            for (let i = 0; i < 7 ; i++) {
                var rect = document.createElement('div');
                rect.classList.add('rect');
        
                rect.style.left = `${posX}px`;
                rect.style.top = `${posY}px`;
                rect.style.width = `${rectWidth}px`;
                rect.style.height = `${rectHeight}px`;
                rect.style.opacity = `0.6`
                
                if (i == 1 || i == 4) {
                    posX += rectWidth * 3.5
                } else {
                    posX += rectWidth * 2
                }
    
                draggable(rect)
                draggableMobile(rect)
                document.getElementById(id).appendChild(rect);
            }
            
            //update values
            posY = div.getBoundingClientRect().top + gap + scrollTop
            switch(option) {
                case "left":
                    posX = div.getBoundingClientRect().left + (rectWidth/2)
                    break
                case "right":
                    posX = div.getBoundingClientRect().left - (rectWidth/2) + divW/2
            }
    
            for (let i = 0; i < 7 ; i++) {
                var rect = document.createElement('div');
                rect.classList.add('rect');
        
                rect.style.left = `${posX}px`;
                rect.style.top = `${posY}px`;
                rect.style.width = `${rectWidth}px`;
                rect.style.height = `${rectHeight}px`;
                rect.style.backgroundColor = `#2f368b`;
                rect.style.opacity = `0.8`
                
                if (i == 1 || i == 4) {
                    posX += rectWidth * 3.5
                } else {
                    posX += rectWidth * 2
                }
                draggable(rect)
                draggableMobile(rect)
                document.getElementById(id).appendChild(rect);
            }
    
        }
    
        function createRectangles(staff, numRects, angVariation, sizeOption, posOption) {
            const div = document.getElementById(staff)
            
            const score = document.getElementById("score")
            var w = score.getBoundingClientRect().width
    
            let scrollTop = document.documentElement.scrollTop;
            let scoreTop = score.getBoundingClientRect().top + scrollTop;
            // circle stroke diameter + margin left
            const d = parseInt(w/2)* (6/5);
            let rectWidth
            switch(sizeOption) {
                case "extra-small":
                    rectWidth = (w - d)/5
                    break
                case "small":
                    rectWidth = (w - d)/3
                    break
                case "large":
                    rectWidth = w - d
                    break
            }
            
            let rectHeight = div.getBoundingClientRect().height/8
            let posX
            let posY
            switch(posOption) {
                case "left":
                    posX = div.getBoundingClientRect().left + marginWidth
                    posY = div.getBoundingClientRect().top + scrollTop
                    break
                case "right":
                    posX = div.getBoundingClientRect().left + d
                    posY = div.getBoundingClientRect().top + div.getBoundingClientRect().height + scrollTop
                    break
            }
            
            
            let ang = -60
            for (let i = 0; i < numRects; i++) {
                var rect = document.createElement('div');
                rect.classList.add('rect');
        
                rect.style.left = `${posX}px`;
                rect.style.top = `${posY}px`;
                rect.style.width = `${rectWidth}px`;
                rect.style.height = `${rectHeight}px`;
                rect.style.backgroundColor = `#2f368b`;
                rect.style.transform = `rotate(${ang}deg)`
                rect.style.opacity = `${Math.random()}`
                
                ang += angVariation
                draggable(rect)
                draggableMobile(rect)
                div.appendChild(rect);
    
            }
        }
    
        function squareNotes(staffName) {
            const staff = document.getElementById(staffName)
            let staffW = staff.getBoundingClientRect().width
            let staffH = staff.getBoundingClientRect().height
    
            let scrollTop = document.documentElement.scrollTop;
            let scoreTop = score.getBoundingClientRect().top + scrollTop;
            
            let line1 = document.getElementById("line1")
            let line2 = document.getElementById("line2")
            let style = window.getComputedStyle(line1)
            let borderStyle = style.getPropertyValue('border-top')
            let lineWidth = parseFloat(borderStyle.split(' ')[0])
            let rectWidth = line2.getBoundingClientRect().top - line1.getBoundingClientRect().top
            
            let posX = randomNumber(staff.getBoundingClientRect().left, staffW - (6*rectWidth))
            let posY = staff.getBoundingClientRect().top + staffH - lineWidth - (rectWidth*3) + scrollTop
            let num = randomNumber(2, 5)
            for (let i = 0; i < num; i++) {
                const square = document.createElement('div')
                square.classList.add('rect')
                square.style.left = `${posX}px`;
                square.style.top = `${posY}px`;
                square.style.width = `${rectWidth}px`;
                square.style.height = `${rectWidth}px`
                square.style.backgroundColor = `black`;
                
                draggable(square)
                draggableMobile(square)
                document.getElementById("score").appendChild(square)
    
                posX += rectWidth
                if (randomNumber(0, 50) % 2 == 0) {
                    
                    posY -= rectWidth
                } else {
                    posY += rectWidth
                }
            }
    
        }
        
        function refreshDOM() {
            // Check if both width and height have changed significantly
            if (
                Math.abs(window.innerWidth - lastWindowWidth) > 50 ||
                Math.abs(window.innerHeight - lastWindowHeight) > 50
            ) {
                location.reload();
            }

            // Update last window dimensions
            lastWindowWidth = window.innerWidth;
            lastWindowHeight = window.innerHeight;
        }

        function draw() {
            window.addEventListener('resize', refreshDOM);
            downloadImage()
            createCircleStroke("score")
            createRandomCircle("score", "large", "staff1")
            createPianoKeys("staff2", "left")
            createPianoKeys("staff6", "right")
            createRectangles("staff4", 7, 15, "large", "right")
            createRectangles("staff7", 15, 15, "extra-small", "left")
            squareNotes("staff1")
            squareNotes("staff2")
            squareNotes("staff3")
            squareNotes("staff4")
            squareNotes("staff5")
            squareNotes("staff6")
            squareNotes("staff7")
            squareNotes("staff8")
            squareNotes("staff8")
            squareNotes("staff8")
        }
    
        draw()
    }
    });
      