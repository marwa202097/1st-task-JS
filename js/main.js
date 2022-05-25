var addBtn=document.getElementById('addBtn');
var qouteArray=
[
    {
        qoute: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        qouteAuther: "Thomas Edison"
        },
        {
            qoute: "You can observe a lot just by watching.",
        qouteAuther: "Yogi Berra"
        },
        {
            qoute: "A house divided against itself cannot stand.",
        qouteAuther: "Abraham Lincoln"
        },
        {
            qoute: "Difficulties increase the nearer we get to the goal.",
        qouteAuther: "Johann Wolfgang von Goethe"
        },
        {
            qoute: "Fate is in your hands and no one elses",
        qouteAuther: "Byron Pulsifer"
        },
        {
            qoute: "Be the chief but never the lord.",
        qouteAuther: "Lao Tzu"
        },
        {
            qoute: "Nothing happens unless first we dream.",
        qouteAuther: "Carl Sandburg"
        },
        {
            qoute: "Well begun is half done.",
        qouteAuther: "Aristotle"
        },
        {
            qoute: "Life is a learning experience, only if you learn.",
        qouteAuther: "Yogi Berra"
        },
        {
            qoute: "Self-complacency is fatal to progress.",
        qouteAuther: "Margaret Sangster"
        },
        {
            qoute: "Peace comes from within. Do not seek it without.",
        qouteAuther: "Buddha"
        },
        {
            qoute: "Who sows virtue reaps honour.",
        qouteAuther: "Leonardo da Vinci"
            },
            {
                qoute: "Be kind whenever possible. It is always possible.",
            qouteAuther: "Dalai Lama"
            },
            {
                qoute: "Talk doesn't cook rice.",
            qouteAuther: "Chinese proverb"
            },
            {
                qoute: "He is able who thinks he is able.",
            qouteAuther: "Buddha"
            },
            {
                qoute: "A goal without a plan is just a wish.",
            qouteAuther: "Larry Elder"
            },
            {
                qoute: "To succeed, we must first believe that we can.",
            qouteAuther: "Michael Korda"
            },
            {
                qoute: "Learn from yesterday, live for today, hope for tomorrow.",
            qouteAuther: "Albert Einstein"
            },
            {
                qoute: "A weed is no more than a flower in disguise.",
            qouteAuther: "James Lowell"
            },
            {
                qoute: "Do, or do not. There is no try.",
            qouteAuther: "Yoda"
            },
            {
                qoute: "All serious daring starts from within.",
            qouteAuther: "Harriet Beecher Stowe"
            },
            {
                qoute: "The best teacher is experience learned from failures.",
            qouteAuther: "Byron Pulsifer"
            },
            {
                qoute: "Think how hard physics would be if particles could think.",
            qouteAuther: "Murray Gell-Mann"
            },
            {
                qoute: "Love is the flower you've got to let grow.",
            qouteAuther: "John Lennon"
            },
            {
                qoute: "Don't wait. The time will never be just right.",
            qouteAuther: "Napoleon Hill"
            },
            {
                qoute: "Time is the wisest counsellor of all.",
            qouteAuther: "Pericles"
            },
            {
                qoute: "You give before you get.",
            qouteAuther: "Napoleon Hill"
            },
            {
                qoute: "Wisdom begins in wonder.",
            qouteAuther: "Socrates"
            },
];

addBtn.onclick = function() {
    var rand = qouteArray[Math.random() * qouteArray.length | 0];
    console.log(rand);

    for(var i=0;i<qouteArray.length; i++){
         document.getElementById('qoute').innerHTML = rand.qoute ;
         document.getElementById('qouteAuther').innerHTML = rand.qouteAuther ;
    }
}
