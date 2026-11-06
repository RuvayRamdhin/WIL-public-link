/*About us Accordion Handler */
document.addEventListener('DOMContentLoaded', () => {

    //Step 1: Select all the accordion buttons
    const accordionButtons = document.querySelectorAll('.accordion-header');

    //Step 2: Loop through each header button
    accordionButtons.forEach((header) => {

        //Ensure aria-expanded is initially set to false for all headers
        header.setAttribute('aria-expanded', 'false');

        //Step 3: Adding a click event
        header.addEventListener("click", () => {

            //Step 4: Finding the content panel associated with the clicked header
            const contentPanel = header.nextElementSibling;

            //Step 5: Checks if the current item is already expanded
            const accordionItem = header.parentElement;
            const isOpen = accordionItem.classList.contains('active');

            //Step 6: Close all accordion items
            //This makes sure that only one item is open at a time
            accordionButtons.forEach((item) => {
                const parentItem = item.parentElement;

                //Removes the "active" CSS class from ther parent item
                parentItem.classList.remove('active');

                //Updates the aria-expanded attribute to false
                item.setAttribute('aria-expanded', 'false');

                //Finds the content panel associated with the current item
                const contentPanel = item.nextElementSibling;

                //Resets the panel's max-height to null, effectively closing it
                contentPanel.style.maxHeight = null;
            });

            //Step 7: Open the clicked accordion only if it was previously closed
            if (!isOpen) {
                //Adds the "active" CSS class to the parent item of the clicked header
                accordionItem.classList.add('active');
                header.setAttribute('aria-expanded', 'true');

                //Dynamically calculate scrollHeight to handle content smoothly
                contentPanel.style.maxHeight = contentPanel.scrollHeight + 30 + "px";
            }
        });
    });
    console.log("Accordion functionality initialized using class standards.");
});
