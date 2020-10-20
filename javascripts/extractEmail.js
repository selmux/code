<script>
var text = "type emails here or text info@man.com";
var mailformat = 
    /[0-9a-zA-Z]+@[0-9a-zA-Z]+[\.]{1}[0-9a-zA-Z]+[\.]?[0-9a-zA-Z]+/g;
do {
     var address = mailformat.exec(text);
     alert(address[0]);       // => prints emails in order 
} while (address.index < text.length);
</script>