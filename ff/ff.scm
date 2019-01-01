;;; -*- coding: utf-8 -*-
(use sxml.serializer)

(define-values (yomi0 yomi1 yomi~)
  (let ((ys '("イ" "ニ" "サ" "ヨ" "ゴ" "ロ" "ナ" "ハ"
              "ク" "タ" "ブ" "チャ" "ド" "テ" "フ")))
    (values (list->vector (cons "レ" ys))
            (list->vector (cons "ガ" ys))
            (list->vector (map (lambda (x)
                                 (and (pair? x) x))
                               '(("オ") 1 2 ("ミ") ("シ") 5
                                 ("ム") 7 ("バ" "ヤ") 9 ("カ")
                                 ("ボ") #xc #xd ("ケ") #xf))))))

(let ((nums (iota 15 1)))
  (print "<?xml version='1.0' encoding='utf-8' ?>")
  (srl:sxml->xml-noindent
   `(html (@ (lang "ja")
             (xml:lang "ja")
             (xmlns "http://www.w3.org/1999/xhtml"))
     (head
      (title "FF（フフ）")
      (link (@ (rel "stylesheet")
               (href "./ff.css")
               (type "text/css"))))
     (body
      (h1 "FF（フフ）")
      (div (@ (id "ff"))
       ,@(map (lambda (i)
                `(table (@ (id ,(format "ff~A" i)))
                  (thead
                   (tr (th ,(format "~X（~A）のだん" i (ref yomi0 i)))))
                  (tbody
                   ,@(map (lambda (j)
                            (let ((v (* i j)))
                              (receive (q r) (quotient&remainder v 16)
                                `(tr
                                  (td
                                   (span (@ (class "yomi"))
                                    ,(format "~A~A~A~A"
                                             (ref yomi0 i)
                                             (ref yomi0 j)
                                             (ref yomi1 q)
                                             (ref yomi0 r)))
                                   (br)
                                   ,(format "~X×~X=~X" i j v))))))
                          nums))))
              nums))
      (div (@ (id "nums"))
       (h2 "すうじのよみかた")
       ,@(map (lambda (ns)
                `(table
                  ,@(map (lambda (n)
                           `(tr (th ,(format "~X" n))
                                (td ,(format "~A~A"
                                             (ref yomi0 n)
                                             (cond ((ref yomi~ n)
                                                    => (lambda (ys)
                                                        (format "（~A）"
                                                                (string-join ys "、"))))
                                                   (else ""))))))
                         ns)))
              (map (cut iota 4 <>) (iota 4 0 4))))
      (ul (@ (id "bibliography"))
       (li (a (@ (href "http://parametron.blogspot.jp/2010/08/blog-post_08.html"))
            "パラメトロン計算機: 十六進乗算表"))
       (li (a (@ (href "http://www.nue.org/nue/tao/bitao/s002.html"))
                 "マルチパラダイム言語 TAO 第2回 TAO のデータ型")
           " 「いななごろし」"))))
   (current-output-port)))
