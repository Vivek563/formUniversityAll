var donationRange = document.getElementById("donation_range");
        var dontaionText = document.getElementById("donation_range_text");

        donationRange.oninput = function (){
            dontaionText.innerText = donationRange.value;
        }

        var anyAmount = document.getElementById("anyAmount");
        anyAmount.onclick = function () {
            var anyAmountContainer = document.getElementById("anyAmountOption");
            anyAmountContainer.classList.toggle('hidden')
            var rangeAmountContainer = document.getElementById("rangeAmountOption");
            rangeAmountContainer.classList.toggle('hidden');
            if(anyAmount.innerText === "Choose from presets?"){
                anyAmount.innerText = "Any other amount?"
            }
            else {
                anyAmount.innerText = "Choose from presets?"
            }
        }