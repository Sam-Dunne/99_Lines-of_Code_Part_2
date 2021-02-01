
let friends = ['Chase', 'Trey', 'Katie', 'Devonte', 'Emil'];
let singButton = document.querySelector('button');


singButton.addEventListener('click', function () {

    friends.forEach(friend => {
//creates, appends, modifies class for div
        let friendsDiv = document.createElement('div');
        document.body.appendChild(friendsDiv);
        friendsDiv.className = 'friend';
//creates h3 element, appends inside div, creates text node for header
        let friendHeader = document.createElement('h3');
        friendsDiv.appendChild(friendHeader);
        let friendNameText = document.createTextNode(friend);
        friendHeader.appendChild(friendNameText);
//creates paragraph element, appends in div
        let songLinesParagraph = document.createElement('p');
        friendsDiv.appendChild(songLinesParagraph);
//Loops thru song lyric logic. creates and appends para textNode for each condition 
        for (let num = 99; num >= 1; num--) {
            if (num === 2) { 
                let songLinesText = document.createTextNode
                    (num + ' lines of code in the file, ' + num + ' lines of code; ' + friend + ' strikes one out, clears it all out, ' + (num - 1) + ' line of code in the file, ');
                songLinesParagraph.appendChild(songLinesText);
            } else if (num === 1) {
                let songLinesText = document.createTextNode
                    (num + ' line of code in the file, ' + num + ' line of code; ' + friend + ' strikes one out, clears it all out, ' + (num - 1) + ' lines of code in the file.');
                songLinesParagraph.appendChild(songLinesText);
            } else if (num > 2) {
                let songLinesText = document.createTextNode(num + ' lines of code in the file, ' + num + ' lines of code; ' + friend + ' strikes one out, clears it all out ' + (num - 1) + ' lines of code in the file, ');
                songLinesParagraph.appendChild(songLinesText);
            };
        };
    })
});













