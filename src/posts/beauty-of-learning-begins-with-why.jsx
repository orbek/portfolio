// One post per file. Exports metadata + the essay as semantic JSX.
// Typography comes from the scoped `.post-body` styles in index.css, so the
// markup below stays clean semantic HTML.

const LINKEDIN_POST =
    'https://www.linkedin.com/posts/09barbosacarlos_i-never-considered-myself-a-creative-person-activity-7420501230986117120-zb-A';

function Content() {
    return (
        <>
            <p>
                A few months ago, I wrote{' '}
                <a href={LINKEDIN_POST} target="_blank" rel="noopener noreferrer">
                    a LinkedIn post about creativity
                </a>
                . Since then, one idea has continued to echo in my mind:
            </p>

            <p className="statement">Creativity must be cultivated.</p>

            <p>
                But creativity does not grow in isolation. It is fed by curiosity,
                experimentation, new experiences, and the courage to ask questions.
                In other words, creativity begins with learning.
            </p>

            <p>
                I believe my life started to change when I began questioning the
                things I had always been told.
            </p>

            <p>
                Growing up, I learned not to question adults. At home, at school, and
                at church, the expectation was simple: do not talk back, do not
                challenge authority, and always say yes.
            </p>

            <p className="statement">
                I learned how to accept. Nobody taught me how to ask why.
            </p>

            <p>
                That began to change after I graduated from high school. I was not in
                college yet, and I did not know what I wanted to study. To be honest,
                nothing in my environment was pushing me toward higher education.
            </p>

            <p>Then I met people who were attending college.</p>

            <p>
                They lived in another city. They were meeting different people,
                exploring new ideas, and having experiences that seemed far removed
                from my own life. Something awakened in me.
            </p>

            <p className="statement">I wanted that life for myself.</p>

            <p>At home, however, the questions came quickly:</p>

            <blockquote>
                <p>Why do you want to leave?</p>
                <p>Who is going to pay for it?</p>
                <p>Who will support you while you study?</p>
            </blockquote>

            <p>
                Those were practical questions, but behind them was a deeper one: Why
                not simply accept the life already in front of you?
            </p>

            <p>
                Around the same time, I was also questioning the church and the power
                institutions can exercise over people through faith. I was not
                questioning God. I was questioning what people and organizations
                sometimes do in God&rsquo;s name.
            </p>

            <p>
                For the first time, I was learning that questioning something does not
                necessarily mean rejecting it. Sometimes, questioning is how we
                understand it more deeply.
            </p>

            <p>
                Fast-forward a little, and there I was: living in another city,
                standing on my own two feet, studying engineering at night, working
                full-time during the day, and somehow still finding time for a social
                life.
            </p>

            <p className="statement">I miss the energy of my early twenties.</p>

            <p>
                Studying engineering was a watershed moment for me. It changed how I
                saw the world. Later, when I studied applied statistics, questioning
                became more than a personality trait&mdash;it became a method.
            </p>

            <ul>
                <li>You must ask questions.</li>
                <li>You must test your hypotheses.</li>
                <li>You must examine the evidence.</li>
                <li>Most importantly, you must learn how to ask better questions.</li>
            </ul>

            <p>That mindset followed me beyond the classroom.</p>

            <p>
                I began questioning instructions that did not make sense. I challenged
                actions I believed were wrong. When someone said, &ldquo;Do this&rdquo;
                or &ldquo;Do it this way,&rdquo; I wanted to understand why.
            </p>

            <p>Of course, that did not always make life easier.</p>

            <p>
                I was labeled a rebel&mdash;the person who could not &ldquo;just do the
                task.&rdquo; And if you try questioning your boss, you may discover
                that not everyone appreciates curiosity. Some people experience a
                question as a challenge to their authority.
            </p>

            <p>
                I had to learn that curiosity also requires wisdom. Asking the right
                question matters, but so do timing, intention, and the way we express
                it.
            </p>

            <p className="statement">
                Still, I would not trade that curiosity for passive acceptance.
            </p>

            <p>
                Seeking knowledge changes you. It takes you beyond the limits of your
                upbringing, your environment, and even your current understanding of
                yourself. It introduces you to possibilities you could not see before.
            </p>

            <p className="statement">That is the beauty of learning.</p>

            <p>
                Learning is not only about collecting information, earning degrees, or
                becoming better at your job. It is about expanding the boundaries of
                your life. It is discovering that the world is larger, stranger, and
                more fascinating than you imagined.
            </p>

            <p>
                We live in a time of extraordinary abundance. Information is
                everywhere. Answers are available within seconds. But access to
                information does not automatically create knowledge&mdash;and knowledge
                does not automatically create wisdom.
            </p>

            <p className="statement">We still have to pay attention.</p>

            <p>
                We have to question, test, reflect, and experience things for
                ourselves. We have to leave familiar spaces, meet people who see the
                world differently, and remain open to being wrong.
            </p>

            <p>So, this is my invitation to you:</p>

            <p className="statement">Be curious.</p>

            <p>
                Learn something new, especially when it makes you uncomfortable. Ask
                why. Test what you believe. Listen to people whose experiences are
                different from yours. Allow yourself to change your mind.
            </p>

            <ul className="cadence">
                <li>Think.</li>
                <li>Try.</li>
                <li>Experiment.</li>
                <li>Express your ideas.</li>
                <li>Execute them.</li>
                <li>Learn from what happens.</li>
                <li>EVOLVE.</li>
            </ul>

            <p>
                Do not let the world&rsquo;s abundance turn you into a passive
                consumer. Become an active observer, a thoughtful questioner, and a
                lifelong learner.
            </p>

            <p>
                The next question you ask may not change the entire world.
            </p>

            <p className="statement">But it might change yours.</p>
        </>
    );
}

const post = {
    slug: 'beauty-of-learning-begins-with-why',
    title: 'The Beauty of Learning Begins With “Why”',
    subtitle: 'On curiosity, questioning, and lifelong learning',
    excerpt:
        'Creativity must be cultivated — and it begins with the courage to ask why. A personal reflection on how questioning changed my life.',
    date: '2026-07-26',
    readTime: '5 min read',
    Content,
};

export default post;
