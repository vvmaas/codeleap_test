export default function timeSince(date) {

    const seconds = Math.floor((new Date() - date) / 1000);
  
    let interval = seconds / 31536000;
  
    if (interval > 2) {
      return Math.floor(interval) + " years";
    } else if (interval > 1) {
      return Math.floor(interval) + " year";
    }

    interval = seconds / 2592000;
    if (interval > 2) {
      return Math.floor(interval) + " months";
    } else if (interval > 1) {
      return Math.floor(interval) + " month";
    }

    interval = seconds / 86400;
    if (interval > 2) {
      return Math.floor(interval) + " days";
    } else if (interval > 1) {
      return Math.floor(interval) + " day";
    }

    interval = seconds / 3600;
    if (interval > 2) {
      return Math.floor(interval) + " hours";
    } else if (interval > 1) {
      return Math.floor(interval) + " hour";
    }

    interval = seconds / 60;
    if (interval > 2) {
      return Math.floor(interval) + " minutes";
    } else if (interval > 1) {
      return Math.floor(interval) + " minute";
    }

    if(Math.floor(seconds) <= 1 ) {
      return "1 second"
    } 

    if(seconds < 0) {
      return "1 second"
    } 

    return Math.floor(seconds) + " seconds";
  }