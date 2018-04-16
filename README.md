# redactMe
A quick JavaScript to replace a string with a black redaction bar. I made this at a colleague's request, and we might be deploying it or something like it on Searchlight.

The PNG file is 50px by 20px - it was drawn to cover the name "Alice" as it's styled in the html example file.

If you wanted to redact a longer or shorter name, you'd use a longer or shorter bar. Same if your particular styling is taller or shorter, etc. etc.

The HTML file assigns each case of the name "Alice" to `<span class = "redactMe">`, and the JS replaces each case of that class with blackbar.png.
  
Like I said, quick and dirty. Feel free to use or adapt or improve.
