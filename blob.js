@keyframes slideYLarge {
    0%  { transform: translateY(0);    }
    50% { transform: translateY(200%); } // magic number
}

@keyframes slideYMedium {
    0%  { transform: translateY(0);    }
    50% { transform: translateY(265%); } // magic number
}

@keyframes slideYSmall {
    0%  { transform: translateY(0);    }
    50% { transform: translateY(400%); } // magic number
}

html {
    background-color: #fafafa;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    //border: $temp;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

ul {
    @include list-reset; // from resource pen (see settings)
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width:  9vw;
    height: 9vw;
    
    // offsetting start location because ease-in-out jitters if your animation ends in the middle of a translate
    transform: translateY(-100%);
}

li {
    position: absolute;
    border-radius: 50%;
    
    &:nth-child(1) {
        width:  100%;
        height: 100%;
        background-color: #7cd6f9; // from source gif
        
        // 100% (base) animation duration
        animation: slideYLarge 3000ms infinite ease-in-out;
    }
    
    &:nth-child(2) {
        width:  75%;
        height: 75%;
        background-color: #eb11ba; // from source gif
        
        // 50% of base animation duration
        animation: slideYMedium 1500ms infinite ease-in-out;
    }
    
    &:nth-child(3) {
        width:  50%;
        height: 50%;
        background-color: #fad800; // from source gif
        
        // 25% of base animation duration
        animation: slideYSmall 750ms infinite ease-in-out;
    }
}

@for $i from 1 through 10 {
    ul:nth-child(#{$i}) li {
        
        // 100% (base) animation delay
        &:nth-child(1) {
            animation-delay: -(250ms * $i);
        }
        
        // 50% of base animation delay
        &:nth-child(2) {
            animation-delay: -(125ms * $i);
        }
        
        // 25% of base animation delay
        &:nth-child(3) {
            animation-delay: -(62.5ms * $i);
        }
        
    }
}
