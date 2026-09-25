// One post per file. Exports metadata + the essay as semantic JSX.
// Typography comes from the scoped `.post-body` styles in index.css.
// Charts are static SVGs rendered from the benchmark's Vega-Lite specs and
// live in public/assets/posts/ticket-routing-frontier-models/.

const ASSETS = '/assets/posts/ticket-routing-frontier-models';

function Chart({ name, alt, caption }) {
    return (
        <figure className="post-figure">
            <img src={`${ASSETS}/${name}.svg`} alt={alt} loading="lazy" />
            {caption && <figcaption>{caption}</figcaption>}
        </figure>
    );
}

function Content() {
    return (
        <>
            <p className="lede">
                I benchmarked Jev, GPT&#8209;6, Gemini and ten local open models on
                4,200 tickets and queries. The model mattered less than I expected,
                until the task got hard.
            </p>

            <p>
                I started this project to test a simple idea. <strong>Jev</strong> is
                a typed decision API: you send a ticket and a list of categories, and
                it returns a choice with a probability for every option. My hypothesis
                was that it would route customer&#8209;support tickets more cheaply
                than general&#8209;purpose language models, and maybe more accurately.
            </p>

            <p>
                Five datasets, 18 models, nearly 100 benchmark runs and about $28 of
                API spend later, the answer is more useful than a yes or no:
            </p>

            <ul>
                <li>
                    <strong>For a small, well&#8209;defined routing policy, you don&rsquo;t need a frontier model.</strong>{' '}
                    Once the test data and the prompt were right, a $4&#8209;per&#8209;100k&#8209;tickets
                    model, and even a free local model, routed tickets as accurately as the
                    most expensive models.
                </li>
                <li>
                    <strong>For fine&#8209;grained intents and out&#8209;of&#8209;scope detection, the bigger models earn their price</strong>,
                    mainly because their answers are right more often and their confidence
                    lets you safely automate more.
                </li>
                <li>
                    <strong>Jev was not the cheapest option</strong>, but among the accurate
                    models its probabilities were the most informative confidence scores.
                </li>
            </ul>

            <h2>TL;DR</h2>

            <ul>
                <li>
                    <strong>My first benchmark was wrong.</strong> 100,000 rows, but only 445
                    unique sentences and keyword labels. It ranked models on my labelling
                    quirks. Rebuilding the dataset moved the same models from 64&ndash;85% to
                    roughly 90&ndash;100% accuracy and reshuffled the ranking.
                </li>
                <li>
                    <strong>Writing the routing policy into the prompt beat switching models.</strong>{' '}
                    One rewritten set of category descriptions lifted every model, e.g.
                    gpt&#8209;5.4&#8209;mini from 87.7% to 98.7% and gpt&#8209;5.4&#8209;nano
                    from 80.7% to 93.6%.
                </li>
                <li>
                    <strong>On clean and deliberately hard support tickets, small models are enough.</strong>{' '}
                    gpt&#8209;6&#8209;luna scored 99.5&ndash;100% for $2&ndash;4 per 100k tickets.
                    Locally, gemma4:31b scored 99.9% on the rebuilt set and 98.9% on the hard
                    set for $0 per token.
                </li>
                <li>
                    <strong>On public, human&#8209;labelled data (BANKING77, CLINC150) the gap reopens.</strong>{' '}
                    The best models reached 85% and 94.6%; gpt&#8209;6&#8209;luna 82.9% and 88.6%;
                    Jev 80.5% and 87.2%; the best local models 74.8% and 81.4%.
                </li>
                <li>
                    <strong>Confidence quality decides how much you can automate.</strong>{' '}
                    gpt&#8209;6&#8209;luna without reasoning was 86% accurate on CLINC150 but
                    could automate almost nothing at a 95% target, because it is just as
                    confident when wrong. Among the accurate models, Jev&rsquo;s probabilities
                    separated right from wrong answers best.
                </li>
                <li>
                    <strong>Jev packing matters.</strong> 20 tickets per call instead of one
                    cut cost by 45% and <em>raised</em> accuracy. But Jev&rsquo;s cost grows with
                    the number of labels, from $12.60 per 100k tickets with 5 labels to $96
                    with 151.
                </li>
            </ul>

            <h2>The question</h2>

            <p>
                Accuracy on its own doesn&rsquo;t tell you whether a model can route
                tickets without a person. What I care about is:
            </p>

            <ul>
                <li>
                    <strong>How many tickets can it handle alone</strong> while staying
                    above an accuracy target? I used 95% as the main target.
                </li>
                <li>
                    <strong>What does that cost</strong> per 100,000 tickets, including the
                    tickets that still go to a person?
                </li>
                <li>
                    <strong>How fast</strong> is each decision?
                </li>
            </ul>

            <p>
                A ticket counts as <em>automated</em> when the model&rsquo;s confidence
                clears the lowest threshold that keeps accuracy on the automated tickets
                at or above the target. Everything below that threshold goes to a person.
                For total cost I assume <strong>$1.00 per human review</strong>.
                That&rsquo;s a placeholder; use your own number.
            </p>

            <h2>What I tested</h2>

            <div className="table-wrap">
                <table>
                    <thead>
                        <tr><th>Group</th><th>Models</th><th>Confidence comes from</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jev (closed API)</td>
                            <td>jev&#8209;latest (reported as jev&#8209;1.13.0), with 1, 10, 20 or 50 tickets per call</td>
                            <td>Jev&rsquo;s probability distribution</td>
                        </tr>
                        <tr>
                            <td>OpenAI (closed)</td>
                            <td>gpt&#8209;6&#8209;sol (frontier), gpt&#8209;6&#8209;luna (default reasoning and none), gpt&#8209;5.4&#8209;mini, gpt&#8209;5.4&#8209;nano</td>
                            <td>Token probabilities (5.4 family) or self&#8209;reported (GPT&#8209;6)</td>
                        </tr>
                        <tr>
                            <td>Google (closed)</td>
                            <td>gemini&#8209;3.1&#8209;pro&#8209;preview (frontier), gemini&#8209;3.8&#8209;flash, gemini&#8209;3.5&#8209;flash&#8209;lite</td>
                            <td>Self&#8209;reported</td>
                        </tr>
                        <tr>
                            <td>Local, open weights</td>
                            <td>gemma4 (8B, 26B MoE, 31B, plus a custom 26B build), qwen3.6:35b&#8209;a3b, granite4.2 (8B, 30B), ornith&#8209;1.5 (9B, 35B), muse&#8209;glimmer:30b</td>
                            <td>Token probabilities, Ollama on an Apple M4 Max with 64 GB</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                Every model got the same instructions and label descriptions. Hosted
                models ran through the providers&rsquo; Batch APIs where possible, which
                halves the price. I also ran gpt&#8209;6&#8209;luna in real time, because
                Jev always answers in real time and batch results can take minutes to
                hours.
            </p>

            <div className="table-wrap">
                <table>
                    <thead>
                        <tr><th>Dataset</th><th className="num">Rows</th><th>What it tests</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>v1 (my first attempt)</td><td className="num">200</td><td>Templated tickets, labelled by keyword</td></tr>
                        <tr><td>v2 (rebuilt)</td><td className="num">1,000</td><td>Clear, mixed&#8209;signal, indirect and off&#8209;topic tickets, with written labelling rules</td></tr>
                        <tr><td>v3 (hard)</td><td className="num">1,000</td><td>Email threads, buried requests, two&#8209;word messages, Spanish/Portuguese/French, heavy typos, sarcasm, and off&#8209;topic mail that looks like support</td></tr>
                        <tr><td>BANKING77 (public)</td><td className="num">1,001</td><td>Real banking queries, 77 fine&#8209;grained intents, labelled by people</td></tr>
                        <tr><td>CLINC150 (public)</td><td className="num">1,000</td><td>150 intents plus 25% out&#8209;of&#8209;scope queries, labelled by people</td></tr>
                    </tbody>
                </table>
            </div>

            <h2>Lesson 1: my first benchmark was lying to me</h2>

            <p>
                My first dataset had 100,000 rows but only <strong>445 unique sentences</strong>.
                The &ldquo;clear&rdquo; template literally contained the answer (&ldquo;please
                fix this <em>billing</em> issue&rdquo;). The &ldquo;ambiguous&rdquo; tickets were
                labelled by a coin flip. The &ldquo;edge&rdquo; tickets were labelled by a
                keyword a reasonable person would ignore: &ldquo;The system is behaving
                unexpectedly regarding the <em>password</em> logic since the last
                update&rdquo; counted as <code>account</code>, not <code>technical</code>.
            </p>

            <p>
                On that data every model looked mediocre, and the ranking mostly measured
                which model happened to match my quirks. granite4.2:30b looked like the
                best open model; on the rebuilt dataset it came near the bottom of the
                local models.
            </p>

            <Chart
                name="dataset_shift"
                alt="Accuracy of the same models on the first dataset versus the rebuilt dataset: 64 to 85 percent on v1, roughly 90 to 100 percent on v2."
            />

            <p>
                <strong>Takeaway:</strong> before you compare models, read 50 rows of your
                test set. If a person would argue with the labels, you&rsquo;re measuring
                label noise.
            </p>

            <h2>Lesson 2: say your routing policy out loud</h2>

            <p>
                On the rebuilt dataset, the most disputed tickets were questions like{' '}
                <em>&ldquo;My Netflix password isn&rsquo;t working, what do I do?&rdquo;</em> My
                labelling rules call that off&#8209;topic: it is support, but for another
                company&rsquo;s product. My prompt only said off&#8209;topic means{' '}
                <em>&ldquo;unrelated to customer support&rdquo;</em>. gpt&#8209;6&#8209;sol and
                gemini&#8209;3.8&#8209;flash scored 0% on these tickets and
                gemini&#8209;3.1&#8209;pro 6%; the best result was 69%. The models called them{' '}
                <code>account</code>, and honestly they had a point.
            </p>

            <p>
                So I rewrote the category descriptions to match the labelling rules
                exactly, and added one precedence sentence:{' '}
                <em>&ldquo;If the message mentions several areas, choose the one the customer
                is explicitly asking for; background mentions and areas the customer says
                it is not about do not count.&rdquo;</em> Nothing else changed.
            </p>

            <Chart
                name="prompt_effect"
                alt="Accuracy of each model on dataset v2 before and after rewriting the category descriptions; every model improved."
            />

            <p>
                Every model improved. The frontier models went from 0&ndash;6% to 100% on
                the &ldquo;other company&rdquo; tickets. gpt&#8209;5.4&#8209;mini rose from 87.7%
                to 98.7%, gemini&#8209;3.5&#8209;flash&#8209;lite from 93.2% to 98.7%, and Jev
                (20 per call) from 95.3% to 98.6%.
            </p>

            <p>
                <strong>Takeaway:</strong> the prompt is part of the model. A routing
                policy that lives only in someone&rsquo;s head costs more accuracy than a
                bigger model wins back.
            </p>

            <h2>Result 1: on clean tickets, the task is nearly solved</h2>

            <p>With clean data and a clear policy, most models are at or near the ceiling:</p>

            <Chart
                name="accuracy"
                alt="Raw accuracy on dataset v2 with 95 percent bootstrap intervals; most models between 98 and 100 percent."
            />

            <p>
                Eight configurations scored 99.5% or higher, including the cheapest hosted
                model, gpt&#8209;6&#8209;luna (100% with default reasoning, 99.5% without), and
                three local gemma4 models (99.9&ndash;100%). Jev scored 98.6&ndash;99.2% when
                packing 20&ndash;50 tickets per call. The weaker models made most of their
                errors in the same place: the off&#8209;topic look&#8209;alikes.
                muse&#8209;glimmer:30b, which reasons silently even with thinking turned off,
                scored 98.9% here and 98.7% on the hard set, but took 17.5&ndash;18.7 seconds
                per ticket, too slow for real&#8209;time routing on a laptop.
            </p>

            <Chart
                name="by_stratum"
                alt="Accuracy by ticket type on dataset v2: clear, ambiguous, edge and off-topic; errors concentrate in off-topic tickets."
            />

            <h2>Result 2: the hard set separates Jev and the small OpenAI models</h2>

            <p>
                The hard set was built to break models. It has long email threads where
                the newest message asks for something different from the quoted history,
                requests buried between unrelated remarks, two&#8209;word messages, three
                languages, heavy typos, sarcasm, and off&#8209;topic mail that looks like
                support: out&#8209;of&#8209;office replies, vendor pitches, and questions
                about Netflix, Spotify or Tesla.
            </p>

            <Chart
                name="v3_accuracy"
                alt="Raw accuracy on the hard set: current hosted models 99.7 to 100 percent, Jev 94.4, gpt-5.4-mini 95.6, gpt-5.4-nano 85.7."
            />

            <Chart
                name="v3_by_style"
                alt="Heatmap of hard-set accuracy by ticket style for every model; the weakest cells are off-topic look-alikes and, for gemma4:26b, email threads."
            />

            <p>
                The current hosted models barely noticed. gemini&#8209;3.1&#8209;pro,
                gemini&#8209;3.8&#8209;flash, gpt&#8209;6&#8209;sol, gpt&#8209;6&#8209;luna and
                gemini&#8209;3.5&#8209;flash&#8209;lite all scored 99.7&ndash;100%. Jev (94.4%),
                gpt&#8209;5.4&#8209;mini (95.6%) and gpt&#8209;5.4&#8209;nano (85.7%) lost almost
                all their points in one place: <strong>off&#8209;topic look&#8209;alikes</strong>.
                Jev routes other companies&rsquo; support questions by topic (&ldquo;Netflix
                password&rdquo; becomes <code>account</code>, &ldquo;Tesla app&rdquo; becomes{' '}
                <code>technical</code>) and tends to treat vendor sales pitches as{' '}
                <code>general</code>.
            </p>

            <p>
                The local models split into two groups. gemma4:31b (98.9%) and
                muse&#8209;glimmer (98.7%) held up best, but both are slow. gemma4:31b takes
                5.7 seconds per ticket on my Mac and muse&#8209;glimmer 18.7. The faster
                gemma4:26b fell to 93.4%, and its errors were almost all in{' '}
                <strong>email threads (66%)</strong>: in every one of its 48 wrong thread
                answers it routed the ticket by the <em>quoted older message</em> instead of
                the newest request. If you route email, strip quoted history before
                classifying, or test for this explicitly.
            </p>

            <Chart
                name="v3_automation_95"
                alt="Share of hard-set tickets each model could handle without a person at a 95 percent accuracy target."
            />

            <h2>Result 3: public, human&#8209;labelled data</h2>

            <p>
                My v2 and v3 datasets are synthetic, and I wrote the labels. To check the
                conclusions against labels I didn&rsquo;t write, I ran the same models on
                two public benchmarks that researchers have used for years:{' '}
                <strong>BANKING77</strong> (77 banking intents) and <strong>CLINC150</strong>{' '}
                (150 intents plus out&#8209;of&#8209;scope). They use their original labels,
                and the label names are the only descriptions.
            </p>

            <Chart
                name="cross_dataset"
                alt="Accuracy of each model across all five datasets; the gap between models widens on BANKING77 and CLINC150."
            />

            <p>This is where model size shows up:</p>

            <ul>
                <li>
                    <strong>BANKING77:</strong> gemini&#8209;3.8&#8209;flash 85.0%,
                    gpt&#8209;6&#8209;sol 84.8%, gemini&#8209;3.1&#8209;pro 84.3%,
                    gpt&#8209;6&#8209;luna 82.9%, Jev 80.5%, gemini&#8209;3.5&#8209;flash&#8209;lite
                    78.6%. The intents are very fine&#8209;grained (<code>card_arrival</code> vs{' '}
                    <code>card_delivery_estimate</code>), and published studies have found
                    label errors in this dataset, so nobody gets close to 100%.
                </li>
                <li>
                    <strong>CLINC150:</strong> gemini&#8209;3.8&#8209;flash 94.6%,
                    gemini&#8209;3.1&#8209;pro 93.6%, gpt&#8209;6&#8209;sol 92.1%,
                    gpt&#8209;6&#8209;luna 88.6%, Jev 87.2%. The biggest gap is in{' '}
                    <strong>recognising out&#8209;of&#8209;scope queries</strong>:
                    gemini&#8209;3.8&#8209;flash caught 90% of them, gpt&#8209;6&#8209;sol 83%, Jev
                    76%, gpt&#8209;6&#8209;luna 71%, and gpt&#8209;5.4&#8209;mini just 6%.
                </li>
                <li>
                    <strong>Local models</strong> fell furthest behind here: the best reached
                    74.8% on BANKING77 (gemma4:26b) and 81.4% on CLINC150 (qwen3.6), and they
                    caught 0&ndash;62% of out&#8209;of&#8209;scope queries. Their confidence also
                    separated right from wrong poorly, so at a 95% target they could automate
                    only 1&ndash;36% of queries.
                </li>
            </ul>

            <h2>Can you trust the confidence score?</h2>

            <p>
                Accuracy isn&rsquo;t enough to automate. You need a confidence score that
                is <em>lower when the model is wrong</em>, so you can send those tickets to
                a person.
            </p>

            <Chart
                name="clinc_coverage_curves"
                alt="Accuracy on automated CLINC150 queries versus share automated at every confidence threshold for gemini-3.8-flash, Jev, and gpt-6-luna with and without reasoning."
            />

            <p>
                On CLINC150, gpt&#8209;6&#8209;luna without reasoning was 86% accurate, but it
                could automate only 0.2% of queries at a 95% target: its self&#8209;reported
                confidence was near 1.0 for right and wrong answers alike. Among the models
                above 85% accuracy, Jev&rsquo;s probabilities were the most informative. Its
                average confidence was 0.93 on correct answers and 0.69 on wrong ones, a gap
                of 0.23. For gpt&#8209;6&#8209;sol, gpt&#8209;6&#8209;luna and the two larger
                Gemini models the gap was 0.02&ndash;0.18, and 15&ndash;23% of their wrong
                answers came with a confidence of 0.99 or higher. That&rsquo;s why Jev could
                automate 77% of CLINC150 queries at 95%, more than gpt&#8209;6&#8209;luna with
                reasoning (72%), despite a lower raw accuracy.
            </p>

            <p>
                <strong>Takeaway:</strong> check that confidence actually drops on wrong
                answers before you use it to automate. A model that says &ldquo;1.0&rdquo;
                for everything can&rsquo;t be thresholded.
            </p>

            <h2>Jev: packing tickets into one call</h2>

            <p>
                Jev charges per call, and a large part of each call is fixed overhead.
                Sending 20 tickets in one call, as separate questions, is the biggest cost
                lever:
            </p>

            <Chart
                name="jev_packing_cost"
                alt="Jev cost per 100k tickets at 1, 10, 20 and 50 tickets per call; cost falls from 22.70 to about 12.60 dollars and flattens past 20."
            />

            <p>
                On the clean set, going from 1 to 20 tickets per call cut cost from $22.70
                to $12.60 per 100k tickets and <em>raised</em> accuracy from 96.1% to 98.6%.
                Past 20, savings are small. One catch: every question repeats the full label
                list, so Jev&rsquo;s per&#8209;ticket cost grows with the number of labels. It
                was $12.60 per 100k with 5 labels, $61 with 77 (BANKING77) and $96 with 151
                (CLINC150).
            </p>

            <h2>What it costs</h2>

            <Chart
                name="v3_cost_vs_automation"
                alt="Hard set: model cost per 100k tickets for each hosted model against the share it could automate."
            />

            <p>
                For a five&#8209;label support policy, the numbers are simple.
                gpt&#8209;6&#8209;luna matches the frontier models at $2&ndash;4 per 100k
                tickets, against $42&ndash;56 for gemini&#8209;3.8&#8209;flash and
                gpt&#8209;6&#8209;sol and about $250 for gemini&#8209;3.1&#8209;pro. Jev costs
                $12.60&ndash;13.30 per 100k with 20 tickets per call. Local models cost
                nothing per token.
            </p>

            <p>
                With fine&#8209;grained intents the picture flips, because every query a
                model can&rsquo;t automate costs a human review:
            </p>

            <Chart
                name="clinc_total_cost"
                alt="CLINC150 total cost per 100k queries at a 95 percent target, including 1 dollar per human review; gemini-3.8-flash is lowest."
            />

            <p>
                At $1 per review, gemini&#8209;3.8&#8209;flash has the lowest total cost on
                CLINC150 even though it is ten times more expensive per query than
                gpt&#8209;6&#8209;luna. It automates 97% of queries at 95% accuracy, against
                72% for gpt&#8209;6&#8209;luna.
            </p>

            <h2>So, do you need a frontier model?</h2>

            <p>
                <strong>Not for a small, clearly written routing policy.</strong> With five
                categories and rules written into the prompt, gpt&#8209;6&#8209;luna and
                gemini&#8209;3.5&#8209;flash&#8209;lite matched gpt&#8209;6&#8209;sol and
                gemini&#8209;3.1&#8209;pro within a fraction of a percentage point, for roughly
                a tenth to a hundredth of the price, and a local gemma4:31b came within about
                one point. The extra spend buys nothing measurable.
            </p>

            <p>
                <strong>Yes, or at least a &ldquo;flash&rdquo; tier, when the label space is large or out&#8209;of&#8209;scope detection matters.</strong>{' '}
                On 77 and 150 fine&#8209;grained intents, the stronger models were 2&ndash;7
                points more accurate than gpt&#8209;6&#8209;luna and Jev, much better at
                spotting out&#8209;of&#8209;scope queries, and able to automate far more at a
                95% target. If a human review costs anything close to a dollar, that
                difference pays for the model many times over.
            </p>

            <p>
                <strong>Jev</strong> was competitive on clean tickets (98.6&ndash;99.2%) and
                had the most usable confidence scores, which matters if you automate on a
                threshold. It was not the cheapest: gpt&#8209;6&#8209;luna in real time was
                about three times cheaper at similar latency, and Jev&rsquo;s price rises
                with the number of categories. Its clearest weakness was
                out&#8209;of&#8209;scope look&#8209;alikes.
            </p>

            <h2>What I&rsquo;d do in production</h2>

            <ol>
                <li>
                    <strong>Write the routing policy down and put it in the prompt</strong>,
                    including what&rsquo;s out of scope (other companies&rsquo; products,
                    auto&#8209;replies, vendor pitches). That alone was worth more than any
                    model upgrade.
                </li>
                <li>
                    <strong>Build a test set from real tickets</strong> and have two people
                    label a sample. Where they disagree, fix the policy, not the model.
                </li>
                <li>
                    <strong>Start with the cheapest model that meets your target</strong> on
                    that test set: gpt&#8209;6&#8209;luna, gemini&#8209;3.5&#8209;flash&#8209;lite,
                    or a local gemma4 if data can&rsquo;t leave your network (31B for accuracy,
                    26B for speed, but strip quoted email history first).
                </li>
                <li>
                    <strong>Check the confidence score before you automate on it.</strong>{' '}
                    Plot accuracy against the share automated. If the line is flat, use a
                    model with real probabilities (Jev, or token log&#8209;probabilities) or
                    add a second opinion.
                </li>
                <li>
                    <strong>Escalate the uncertain tail to a person or a stronger model.</strong>{' '}
                    For large or fine&#8209;grained label sets, test a flash or frontier tier:
                    fewer escalations can pay for it.
                </li>
                <li>
                    <strong>Pack requests</strong> if your provider charges per call; with
                    Jev, 20 tickets per call was the sweet spot.
                </li>
                <li>
                    <strong>Re&#8209;run the benchmark whenever the prompt, policy or model changes.</strong>{' '}
                    Each hosted run took minutes and cost between a few cents and a few dollars.
                </li>
            </ol>

            <h2>Limitations</h2>

            <ul>
                <li>
                    <strong>Synthetic tickets.</strong> v2 and v3 are generated from templates
                    with written rules. They are far more varied than my first attempt, but
                    real inboxes are messier. The public datasets are real queries, but not
                    support tickets from one company.
                </li>
                <li>
                    <strong>Self&#8209;reported confidence.</strong> GPT&#8209;6 and Gemini
                    don&rsquo;t return token probabilities, so their confidence is a number the
                    model writes down. It is not a calibrated probability.
                </li>
                <li>
                    <strong>Human review cost is an assumption.</strong> Total&#8209;cost figures
                    use $1.00 per escalated ticket.
                </li>
                <li>
                    <strong>Local latency is one machine:</strong> an Apple M4 Max with 64 GB,
                    Ollama, 4 requests in parallel. Local cost is $0 per token, not $0 to
                    operate.
                </li>
                <li>
                    <strong>Gemini and 151 labels.</strong> Gemini rejects a response schema
                    listing all 151 CLINC150 intents, so for that dataset it answered from the
                    prompt&rsquo;s list; 2 of 3,000 Gemini answers fell outside the list and
                    counted as wrong.
                </li>
                <li>
                    <strong>Prices change.</strong> All prices are list prices checked on 24
                    September 2026.
                </li>
                <li>
                    <strong>One run per configuration.</strong> Intervals are 95% bootstrap
                    intervals over tickets, not over repeated runs. Intervals on &ldquo;share
                    automated&rdquo; are wide when a model&rsquo;s confidence values cluster.
                </li>
            </ul>

            <h2>Method notes</h2>

            <p>
                The dataset generators use fixed seeds, every run keeps row&#8209;level
                results, and every number and chart in this post is computed from those
                rows by one analysis script. The charts are rendered from Vega&#8209;Lite
                specs with their data inlined.
            </p>

            <h2>The one&#8209;page version</h2>

            <figure className="post-figure">
                <a href={`${ASSETS}/poster.png`} target="_blank" rel="noopener noreferrer">
                    <img
                        src={`${ASSETS}/poster.png`}
                        alt="Summary poster: accuracy on the hard set, BANKING77 and CLINC150; three lessons; model cost per 100k tickets; and the answer to the title question."
                        loading="lazy"
                    />
                </a>
                <figcaption>Open the full-size poster.</figcaption>
            </figure>
        </>
    );
}

const post = {
    slug: 'ticket-routing-frontier-models',
    title: 'Do You Need a Frontier Model to Route Support Tickets?',
    subtitle: 'Benchmarking Jev, GPT‑6, Gemini and ten local open models on 4,200 tickets',
    excerpt:
        'I benchmarked 18 models on five datasets. For a small, written routing policy a $3-per-100k model matched the frontier. On fine-grained intents, the gap reopens, and confidence decides how much you can automate.',
    date: '2026-09-25',
    readTime: '12 min read',
    cover: `${ASSETS}/cover.png`,
    coverAlt:
        'Cover: Do you need a frontier model to route support tickets? gpt-6-luna at $2.90 per 100k tickets, 88.6 versus 94.6 percent on CLINC150, and 77 percent automated by Jev.',
    Content,
};

export default post;
