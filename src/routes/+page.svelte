<script lang="ts">
	function getAge(dateString: string): number {
		let today = new Date();
		let birthDate = new Date(dateString);
		let age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}

		return age;
	}
</script>

<header>
	<h1>Mazylol</h1>
	<aside>My website doesn't need to be flashy to be effective!</aside>
</header>

<section>
	<h2>Tiny Bit About Me</h2>
	<p>
		I am a <b>{getAge('2006-09-05')}</b> year old high student that likes to do random stuff that I
		think could be slightly interesting. I write some of the worst code imaginable. Don't belive me?
		Check out my <a href="https://github.com/mazylol">Github</a>
	</p>
</section>

<section>
	<h2>Stuff I Do</h2>
	<ul>
		<li>Discord Bots</li>
		<li>APIs</li>
		<li>Libraries</li>
		<li>Embedded Software</li>
		<li>*NIX Sysadmin</li>
	</ul>
</section>

<section>
	<h2>Languages I Like</h2>
	<ul>
		<li>C</li>
		<li>Rust</li>
		<li>Go</li>
		<li>Zig</li>
		<li>Java (sometimes)</li>
	</ul>
</section>

<section>
	<h2>Software I Like</h2>
	<ul>
		<li>Kitty Term</li>
		<li>NeoVim</li>
		<li><i>software that sucks less ;)</i></li>
	</ul>
</section>

<section>
	<h2>Links</h2>
	<ul>
		<li><a href="https://github.com/mazylol">Github</a></li>
		<li><a href="https://twitter.com/mazylol">Twitter</a></li>
	</ul>
</section>
