import { addZhToneMark, printRule, RuleEntry }  from './util.ts'
import { cnEduPats }  from './cn-edu-pats.ts'

const makeCnEduRule = (): Array<RuleEntry> => {
    const result = cnEduPats.flatMap(([pat, replacement, qingsheng]) => {
        const ps = addZhToneMark(pat);
        const result = ps.map((pattern) => ({ pattern, replacement }));
        if (qingsheng) {
            result.push({
                pattern: pat,
                replacement: qingsheng
            });
        } else {
            result.push({
                pattern: pat,
                replacement
            });
        }
        return result;
    });
    result.push({
        pattern: " ",
        replacement: ""
    });
    return result;
}

printRule(makeCnEduRule());
