function showNotification() {
      if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification("Hello", {
              body: "This is a sample notification.",
              icon: "https://via.placeholder.com/100" 
            });
          } else {
            alert("Notification permission denied.");
          }
        });
      } else {
        alert("Your browser does not support notifications.");
      }
    }