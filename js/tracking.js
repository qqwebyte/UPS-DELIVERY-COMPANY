document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const trackingInput = document.getElementById('tracking-code');
    const trackBtn = document.getElementById('track-btn');
    const trackingResult = document.getElementById('tracking-result');

    // Get the tracking code from the URL query parameter (optional)
    const urlParams = new URLSearchParams(window.location.search);
    const trackingCode = urlParams.get('code');

    if (trackingCode) {
        trackingInput.value = trackingCode;
    }

    
    // Attach event listener to the "Track Order" button
    trackBtn.addEventListener("click", trackOrder);

    // If tracking code exists in URL, auto-track
    if (trackingCode) {
        trackOrder();
    }
});
