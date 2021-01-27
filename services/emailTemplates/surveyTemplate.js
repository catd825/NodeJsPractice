module.exports = survey => {
    return `
    <html>
        <body>
            <div>
                <h3 style="text-align: center;">I'd like your input</h3>
                <p>Please answer the following question:</p>
                <p>${survey.body}</p>
                <div>
                    <a href="http://localhost:3000">Yes</a>
                    <a href="http://localhost:3000">No</a>
                </div>
            </div>
        </body>
    </html>
    `;
}