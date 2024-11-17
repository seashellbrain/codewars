def sum_of_intervals(intervals):

    merged_intervals = []
    for start, end in sorted(intervals):
        
        if not merged_intervals or merged_intervals[-1][1] < start:
            merged_intervals.append((start, end))
        
        else:
            merged_intervals[-1] = (merged_intervals[-1][0], max(merged_intervals[-1][1], end))
    

    return sum(end - start for start, end in merged_intervals)
