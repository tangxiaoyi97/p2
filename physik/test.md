---
title: test
---

This Markdown script is designed to act as a "stress test" for your CSS stylesheet. It covers structural elements, typography, various list types, and complex LaTeX blocks to ensure your math rendering (like KaTeX or MathJax) is properly aligned and spaced.

---

# CSS Kitchen Sink & Style Test

## 1. Typography & Inline Elements

This section tests how the CSS handles standard text flow. **This is bold text**, *this is italicized*, and ***this is both***. You can also test ~~strikethrough~~, ==highlight== and `inline code fragments`.

### Sub-headings look like this

Sometimes you need a [hyperlink to something](https://www.google.com), or perhaps a footnote reference[^1].

> **Blockquote Test:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam sit amet magna vestibulum, accumsan tellus nisl.

---

## 2. Lists and Tasks

* Unordered list item one
* Unordered list item two
* Nested item with a longer description to check for indentation and line-height wrap-around.


* [x] Completed task
* [ ] Incomplete task

1. Ordered list item
2. Second ordered item
    1. Sub-item alpha
    2. Sub-item beta@



---

## 3. Data Visualization

Tables often break layouts if not handled correctly. This test ensures borders, padding, and alignment are consistent.

| Feature | Status | Performance |
| --- | --- | --- |
| Typography | Pass | 98% |
| Math Blocks | Testing | 85% |
| Responsiveness | Pending | N/A |

---

## 4. Mathematical Rendering (LaTeX)

This section tests your KaTeX/MathJax integration. It includes inline formulas and heavy display blocks.

**Inline Math:** The Pythagorean theorem is $a^2 + b^2 = c^2$, which is fundamental for Euclidean geometry. We can also define a limit such as $\lim_{x \to \infty} \frac{1}{x} = 0$.

**Display Math:**
Below is the Schrödinger equation for a non-relativistic particle:

$$i\hbar \frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat{H}\Psi(\mathbf{r},t)$$

And a more complex matrix to check for vertical spacing and bracket scaling:

$$\mathbf{A} = \begin{pmatrix}
1 & x & x^2 \
1 & y & y^2 \
1 & z & z^2
\end{pmatrix}$$

---

## 5. Code Blocks

```python
def fibonacci(n):
    """A simple function to test syntax highlighting."""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Testing indentation and comment colors
print(list(fibonacci(10)))

```

---

## 6. Media

---

**Would you like me to generate a specific CSS file to accompany this document, perhaps focusing on a dark mode or a minimalist aesthetic?**

[^1]:
This is the footnote content. It should appear at the bottom of the page with a small font size.

## 7. Extra  


spoiler: <spoiler>LIZZZZZZARD</spoiler>  
scribbled spoiler: <spoiler scribble>LIZZZZZZARD</spoiler>  

<spoiler box title="spoiler box"> AHAHHAHHAHAHHAHA </spoiler>

<spoiler box title="scribbled spoiler box" scribble> AHHAHAHAAHHAHAHHA </spoiler>