var OSName="Unknown OS";

if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

document.write('Your OS: '+OSName);

if (OSName == "Windows") {
	window.open("https://www.microsoft.com/en-us");
} else if (OSName == "MacOS") {
	window.open("https://www.apple.com");
} else if (OSName == "UNIX") {
	window.open("https://en.wikipedia.org/wiki/Unix");
} else if (OSName == "Linux") {
	window.open("https://www.youtube.com");
}
