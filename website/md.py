#!/usr/bin/env python

import markdown

def markdown_2_html(md_file: Path, *args, **kwargs):
    """Convert Markdown File to HTML"""
    # extensions=["tables", "toc"]
    with open(model, "r") as f: 
        test = f.read()
    html = markdown.markdown(test, *args, **kwargs)
    with open("test.html", "w") as f:
        f.write(html)
